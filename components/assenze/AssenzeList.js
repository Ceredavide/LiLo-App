
import React from 'react';
import { StyleSheet, View, Text, SectionList, ActivityIndicator, AsyncStorage } from 'react-native';

export default class AssenzeList extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      dataSource: null,
      cookie: null,
      refreshing: false
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.setState({ isLoading: true })
    fetch(`http://liloautogestito.ch/API/assenze_docenti.py?ses=${this.state.cookie}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.toString() === '') {
          this.setState({
            isLoading: false,
            dataSource: 'niente'
          })
        } else {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          })
        }
      }).then(() => this.setState({refreshing: false}))
  }

  componentDidMount = async () => {
    this.setState({cookie: await AsyncStorage.getItem('res')})
    return fetch(`http://liloautogestito.ch/API/assenze_docenti.py?ses=${this.state.cookie}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.toString() === '') {
          this.setState({
            isLoading: false,
            dataSource: 'niente'
          })
        } else {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          })
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator></ActivityIndicator>
        </View>
      )
    }
    else {
      if (this.state.dataSource === 'niente') {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>non ci sono assenze</Text>
          </View>
        )
      }
      else {
        return (
          <View style={{ flex: 1, paddingTop: 15 }}>
            <SectionList
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
              renderItem={({ item, index }) =>
                <View key={index} style={styles.body}>
                  <Text style={styles.nome}>{item.name}</Text>
                  <Text style={styles.descrizione}>{item.description}</Text>
                </View>
              }
              renderSectionHeader={({ section: { title } }) => (
                <View style={{ backgroundColor: '#FFF' }}>
                  <View style={styles.head}>
                    <Text style={styles.giorno}>{title}</Text>
                  </View>
                </View>
              )}
              sections={this.state.dataSource}
              keyExtractor={(item, index) => item + index}
            />
          </View>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  head: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#5ea6e5',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 60,
    borderColor: 'black'
  },
  body: {
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    backgroundColor: '#FFF',
  },
  giorno: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  nome: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  descrizione: {
    textAlign: 'center',
    fontSize: 16
  }
});
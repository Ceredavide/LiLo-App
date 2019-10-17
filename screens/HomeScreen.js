import React from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Card, Paragraph } from "react-native-paper";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#5ea6e5",
      paddingBottom: 10
    },
    headerTitleStyle: { fontSize: 25 },
    headerTintColor: "#fff"
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: null,
      refreshing: false
    };
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.setState({ isLoading: true });
    fetch("http://liloautogestito.ch/API/comunicazioni_static.py")
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          isLoading: false,
          dataSource: resJson
        });
      })
      .then(() => this.setState({ refreshing: false }));
  };

  componentDidMount() {
    return fetch("http://liloautogestito.ch/API/comunicazioni_static.py")
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          isLoading: false,
          dataSource: resJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={item => item.titolo}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Card>
                  <Card.Title title={item.titolo} titleStyle={styles.title} />
                  <Card.Cover
                    source={{
                      uri:
                        item.img +
                        "#" +
                        `${Math.random()
                          .toString(36)
                          .substring(2, 15) +
                          Math.random()
                            .toString(36)
                            .substring(2, 15)}`
                    }}
                    style={styles.image}
                  />
                  <Card.Content style={{ marginTop: 10 }}>
                    <Paragraph>{item.comunicazione}</Paragraph>
                  </Card.Content>
                </Card>
              </View>
            )}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    textAlign: "center"
  },
  image: {}
});

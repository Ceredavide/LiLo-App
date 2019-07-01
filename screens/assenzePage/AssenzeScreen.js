import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SectionList } from 'react-native';
import AssenzeList from './AssenzeList'

export default class AssenzeScreen extends React.Component {
  static navigationOptions = {
    title: 'Assenze',
    headerStyle: {
      backgroundColor: '#5ea6e5',
      paddingBottom: 10
    },
    headerTitleStyle: { fontSize: 25 },
    headerTintColor: '#fff'
  }
  render() {
    return (
      <View style={styles.container}>
        <AssenzeList></AssenzeList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
  }
});


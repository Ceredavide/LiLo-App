import React from "react";
import { StyleSheet, View } from "react-native";
import AssenzeList from "../components/assenze/AssenzeList";

export default class AssenzeScreen extends React.Component {
  static navigationOptions = {
    title: "Assenze",
    headerStyle: {
      backgroundColor: "#5ea6e5",
      paddingBottom: 10
    },
    headerTitleStyle: { fontSize: 25 },
    headerTintColor: "#fff"
  };
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
    flexDirection: "column",
    backgroundColor: "#FFF"
  }
});

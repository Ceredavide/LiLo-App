import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.giorno}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    backgroundColor: "#5ea6e5",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 60,
    borderColor: "black"
  },
  giorno: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
});

export default Header;

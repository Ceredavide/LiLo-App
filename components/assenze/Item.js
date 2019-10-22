import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Item = ({ nome, descrizione }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.descrizione}>{descrizione}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    backgroundColor: "#FFF"
  },
  nome: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5
  },
  descrizione: {
    textAlign: "center",
    fontSize: 16
  }
});

export default Item;

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

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
    margin: wp("2%"),
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  nome: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5
  },
  descrizione: {
    fontSize: 16
  }
});

export default Item;

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import COLORS from "../../constants/COLORS"

const CardAssenza = ({ nome, descrizione }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}:</Text>
      <Text style={styles.descrizione}>{descrizione}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp("90%"),
    margin: wp("2%"),
    padding: wp("4%"),
    borderRadius: 10,
    backgroundColor: COLORS.white,
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
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginBottom: 5
  },
  descrizione: {
    fontFamily: "open-sans-regular",
    fontSize: 16
  }
});

export default CardAssenza;

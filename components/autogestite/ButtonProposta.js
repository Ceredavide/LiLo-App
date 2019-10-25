import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ButtonProposta = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Proposta")}>
      <Text style={styles.text}>Proponi un'attività</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: hp("1%"),
    height: hp("6%"),
    width: wp("55%"),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  text: {
    fontSize: hp("3%"),
    color: "white"
  }
});

export default ButtonProposta;
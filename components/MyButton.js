import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const MyButton = ({ action, text, color }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: color }}
      onPress={() => action()}
    >
      <Text style={styles.text}>{text}</Text>
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
    fontSize: hp("2.5%"),
    fontFamily: "open-sans-regular",
    color: "white"
  }
});

export default MyButton;

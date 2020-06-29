import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const FloatingButton = ({ name, action, color }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <AntDesign name={name} size={hp("4%")} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: hp("7%"),
    borderRadius: 200,
    position: "absolute",
    bottom: hp("1%"),
    right: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009fff"
  }
});

export default FloatingButton;

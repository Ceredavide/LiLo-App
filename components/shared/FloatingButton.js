import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import {
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { AntDesign } from "@expo/vector-icons";

import Colors from "../../constants/colors"

const FloatingButton = ({ iconName, action, color, propStyles = {} }) => {
  return (
    <TouchableOpacity onPress={action} style={{ ...styles.container, ...propStyles }}>
      <AntDesign name={iconName} size={hp("3.5%")} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("5.5%"),
    width: hp("5.5%"),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.main,
    margin: 10
  }
});

export default FloatingButton;

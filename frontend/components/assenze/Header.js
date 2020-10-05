import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Colors from "../../constants/colors"

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    paddingTop: hp("1.5%"),
    paddingLeft: wp("3%"),
    borderRadius: 5,
    backgroundColor: Colors.main
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "#009fff",
    fontSize: hp("3.2%")
  },
});

export default Header;
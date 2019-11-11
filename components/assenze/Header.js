import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.giorno}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    paddingTop: hp("3%"),
    paddingLeft: wp("3%"),
    borderRadius: 5,
    backgroundColor: "#F1F5F9"
  },
  giorno: {
    fontFamily: "open-sans-bold",
    color: "#009fff",
    fontSize: hp("3%")
  },
});

export default Header;

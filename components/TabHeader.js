import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const TabHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      height: hp("8%"),
      marginLeft: wp("10%")
  },
  text: {
    color: "#FFF",
    fontSize: hp("5%")
  }
});

export default TabHeader;

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
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
      alignItems: "center"
  },
  text: {
    fontFamily: "open-sans-regular",
    color: "#FFF",
    fontSize: hp("5%")
  }
});

export default TabHeader;

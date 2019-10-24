import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const UltimeProposte = () => {
  return (
    <View style={styles.container}>
      <Text>Qui ci saranno le ultime proposte</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp("2%"),
    height: hp("40%"),
    width: wp("95%"),
    backgroundColor: "white",
    borderRadius: 20,
    alignItems:"center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1 
  }
});

export default UltimeProposte;

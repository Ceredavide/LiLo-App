import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";

const PropostaScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
    ,justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    height: hp("70%"),
    width: wp("95%"),
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  button: {}
});

export default PropostaScreen;

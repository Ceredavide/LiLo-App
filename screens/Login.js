import React from "react";

import { StyleSheet, KeyboardAvoidingView, View, Image } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import LoginCard from "../components/login/LoginCard";

const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.containerLogin}>
      {/* <Image
        style={styles.imgLogo}
        source={require("../assets/images/Logo.png")}
      /> */}
      <Image
        style={styles.imgScuola}
        source={require("../assets/images/scuola.jpeg")}
      />
      <LoginCard navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#009fff",
    alignItems: "center",
    justifyContent: "center"
  },
  imgLogo: {
    height: 130,
    width: 150,
    marginBottom: 30
  },
  imgScuola: {
    height: hp("13%"),
    width: wp("85%"),
    marginBottom: 10
  }
});

export default LoginScreen;

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
      <View style={styles.logoContainer}>
        <Image
          style={styles.imgLogo}
          source={require("../assets/images/Logo.png")}
        />
        <Image
          style={styles.imgScuola}
          source={require("../assets/images/Scuola.jpeg")}
        />
        <LoginCard navigation={navigation}/>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#3498db"
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
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  }
});

export default LoginScreen;

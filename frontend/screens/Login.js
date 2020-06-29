import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, StatusBar, Image, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import FormLogin from "../components/login/Form";
import TouchableText from "../components/shared/TouchableText";

const LoginScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.screen}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Text style={styles.title}>LiLo App</Text>
        <Image
          style={styles.image}
          source={require("../assets/images/scuola.jpeg")}
        />
        <FormLogin />
        <View style={styles.buttons}>
          <Text style={styles.textFooter}>Non hai ancora un account?</Text>
          <TouchableText
            action={() => navigation.navigate("SignUp")}
            text="Registrati"
            textStyle={styles.signUp}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  header: {
    width: wp("100%"),
    height: hp("35%"),
    paddingTop: hp("5%"),
    paddingBottom: hp("5%"),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  title: {
    fontSize: hp("7%"),
    alignSelf: "center",
    color: "#009fff",
    paddingTop: hp("8%"),
    marginBottom: hp("3%"),
    fontFamily: "open-sans-regular"
  },
  image: {
    height: hp("13%"),
    width: wp("85%"),
    marginTop: hp("3%"),
    alignSelf: "center"
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: hp("5%")
  },
  signUp: {
    fontSize: 20,
    color: "#009fff",
    fontFamily: "open-sans-regular",
    textDecorationLine: "underline"
  },
  textFooter: {
    fontFamily: "open-sans-regular"
  }
});

export default LoginScreen;

import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, Image, TextInput } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { AntDesign } from "@expo/vector-icons";

import LoadingButton from "../components/shared/LoadingButton"
import ErrorText from "../components/shared/ErrorText"

import useLogin from "../hooks/useLogin";

import Colors from "../constants/colors"

const LoginScreen = () => {

  const { isLoading, formikLogin } = useLogin()

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formikLogin

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <Image
            source={require("../assets/images/login-illustration.png")}
            style={styles.image}
          />
          <View style={styles.containerTextInput}>
            <AntDesign
              name="user"
              size={32}
              color={Colors.secondary}
              style={styles.icon}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="e-mail"
              placeholderTextColor={Colors.secondary}
              keyboardType="email-address"
              style={styles.textInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              returnKeyType="next"
            />
          </View>
          <ErrorText error={errors.email} touched={touched.email} />
          <View style={{ ...styles.containerTextInput}}>
            <AntDesign
              name="lock"
              size={32}
              color={Colors.secondary}
              style={styles.icon}
            />
            <TextInput
              placeholder="password"
              secureTextEntry={true}
              placeholderTextColor={Colors.secondary}
              style={styles.textInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              returnKeyType="next"
            />
          </View>
          <ErrorText error={errors.password} touched={touched.password} />
          <LoadingButton
            text="Login"
            color={Object.entries(errors).length === 0 ? Colors.green : Colors.red}
            handleSubmit={handleSubmit}
            loading={isLoading}
          />
        </View>
      </TouchableWithoutFeedback >
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.main
  },
  image: {
    marginTop: hp("5%"),
    height: wp("50%"),
    width: wp("52"),
    alignSelf: "center"
  },
  containerTextInput: {
    marginTop: hp("5%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    paddingEnd: 10
  },
  textInput: {
    height: hp("5%"),
    width: wp("60%"),
    color: Colors.white,
    paddingLeft: wp("3%"),
    fontSize: hp("2%"),
    fontFamily: "open-sans-regular",
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.secondary
  }
});

export default LoginScreen;

import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useDispatch } from "react-redux"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { useFormik } from "formik";
import { AntDesign } from "@expo/vector-icons";

import tryLogin from "../../utils/tryLogin"

import { SAVE_USER_CREDENTIALS } from "../../store/actionTypes"

import LoadingButton from "../LoadingButton";

const Form = ({ navigation }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  handleLogin = async ({ email, password }) => {
    setLoading(true);
    const user = await tryLogin(email, password, navigation)
    if (!!user) {
      dispatch({ type: SAVE_USER_CREDENTIALS, user: user })
    }
    setLoading(false)
  }

  const formikLogin = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: handleLogin
  })

  const { values, handleChange, handleSubmit } = formikLogin

  return (
    <View style={styles.form}>
      <View style={styles.containerTextInput}>
        <AntDesign
          name="user"
          size={32}
          color="#009fff"
          style={styles.icon}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="e-mail"
          keyboardType="email-address"
          style={styles.textInput}
          onChangeText={handleChange("email")}
          value={values.email}
          returnKeyType="next"
        />
      </View>
      <View style={{ ...styles.containerTextInput, marginBottom: hp("10%"), }}>
        <AntDesign
          name="lock"
          size={32}
          color="#009fff"
          style={styles.icon}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={handleChange("password")}
          value={values.password}
          returnKeyType="next"
        />
      </View>
      {/* Bottone password dimenticata */}
      <LoadingButton
        text="Login"
        color="#009fff"
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    height: hp("45%"),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: wp("5%")
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
    width: wp("70%"),
    paddingLeft: wp("3%"),
    fontSize: hp("2%"),
    fontFamily: "open-sans-regular",
    borderBottomWidth: 1.5,
    borderBottomColor: "#009fff"
  },
  forgotPassword: {
    fontFamily: "open-sans-regular",
    fontSize: hp("1.5%"),
    color: "#009fff",
    marginTop: hp("5%"),
    marginBottom: hp("3%"),
    textDecorationLine: "underline"
  }
});

export default Form;

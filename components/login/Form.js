import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useDispatch } from "react-redux"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";

import tryLogin from "../../services/tryLogin"

import { SAVE_USER_CREDENTIALS } from "../../store/actionTypes"

import TouchableText from "../TouchableText";
import LoadingButton from "../LoadingButton";

const Form = ({ navigation }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  handleLogin = async ({ email, password }) => {
    setLoading(true);
    tryLogin(email, password, navigation).then(user => {
      if (!!user) {
        dispatch({ type: SAVE_USER_CREDENTIALS, user: user })
      }
    })
    setLoading(false)
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => handleLogin(values)}
    >
      {props => (
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
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              returnKeyType="next"
            />
          </View>
          <View style={styles.containerTextInput}>
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
              onChangeText={props.handleChange("password")}
              value={props.values.password}
              returnKeyType="next"
            />
          </View>
          {/* Bottone password dimenticata */}
          <TouchableText
            action={() => setModalVisible(true)}
            text="Password dimenticata?"
            textStyle={styles.forgotPassword}
          />
          <LoadingButton
            text="Login"
            color="#009fff"
            handleSubmit={props.handleSubmit}
            loading={loading}
          />
        </View>
      )}
    </Formik>
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

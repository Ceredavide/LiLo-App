import React, { useState } from "react";
import { StyleSheet, View, Alert, TextInput } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";
import * as firebase from "firebase";
import { AntDesign } from "@expo/vector-icons";

import TouchableText from "../TouchableText";
import LoadingButton from "../LoadingButton";

const Form = () => {
  const [loading, setLoading] = useState(false);

  tryLogin = ({ user, password }) => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(user, password)
      .then(
        () => {
          setLoading(false);
        },
        error => {
          setLoading(false);
          Alert.alert(error.message);
        }
      );
  };

  return (
    <Formik
      initialValues={{ user: "", password: "" }}
      onSubmit={values => tryLogin(values)}
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
              autoCapitalize={false}
              placeholder="e-mail"
              style={styles.textInput}
              onChangeText={props.handleChange("user")}
              value={props.values.user}
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
          <TouchableText
            action={() => Alert.alert("banfo")}
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
    marginHorizontal: wp("5%"),
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
    padding: wp("3%"),
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

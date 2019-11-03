import React, { useState } from "react";
import { StyleSheet, AsyncStorage, Alert, View, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";
import { TextInput } from "react-native-paper";

import LoginButton from "./LoginButton";

const LoginCard = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  tryLogin = ({ user, password }) => {
    if (user == "" || password == "") {
      Alert.alert("Compila entrambi i campi!");
    } else {
      setLoading(true);
      fetchLogin(user, password);
    }
  };

  fetchLogin = async (user, password) => {
    try {
      let formData = new FormData();
      formData.append("username", user.toLocaleLowerCase());
      formData.append("password", password);
      const response = await fetch(
        "http://liloautogestito.ch/API/check_login_liceo.py",
        {
          method: "POST",
          body: formData
        }
      );
      handleResponse(response);
    } catch (error) {
      setLoading(false);
      Alert.alert(error.toString());
    }
  };

  handleResponse = async response => {
    const data = await response.json();
    if (data["login"]) {
      await AsyncStorage.setItem("res", data["ses"])
      .then(() => {
        setLoading(false);
        navigation.navigate("Main");
      });
    } else {
      setLoading(false);
      Alert.alert("username o password errati, riprovare");
    }
  };

  return (
    <Formik
      initialValues={{ user: "", password: "" }}
      onSubmit={values => tryLogin(values)}
    >
      {props => (
        <View style={styles.card}>
          <Text style={styles.text}>Login</Text>
          <TextInput
            mode="outlined"
            label="username"
            style={styles.textInput}
            onChangeText={props.handleChange("user")}
            value={props.values.user}
          />
          <TextInput
            mode="outlined"
            label="password"
            style={{ ...styles.textInput, marginTop: hp("1%") }}
            secureTextEntry={true}
            onChangeText={props.handleChange("password")}
            value={props.values.password}
          />
          <LoginButton handleSubmit={props.handleSubmit} loading={loading} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  card: {
    height: hp("45%"),
    width: wp("90%"),
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20
  },
  text: {
    fontSize: hp("5%"),
    marginBottom: hp("3%")
  },
  textInput: {
    height: hp("8%"),
    width: wp("80%")
  }
});

export default LoginCard;

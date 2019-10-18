import React, { useState } from "react";
import { StyleSheet, View, AsyncStorage, Alert } from "react-native";

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
        `http://liloautogestito.ch/API/check_login_liceo.py`,
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
      await AsyncStorage.setItem("res", data["ses"]).then(() => {
        setLoading(false);
        navigation.navigate("Main");
      });
    } else {
      setLoading(false);
      Alert.alert("username o password errati, riprovare");
    }
  };

  return (
    <View style={styles.card}>
      <Formik
        initialValues={{ user: "", password: "" }}
        onSubmit={values => tryLogin(values)}
      >
        {props => (
          <View>
            <TextInput
              onChangeText={props.handleChange("user")}
              value={props.values.user}
            />
            <TextInput
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            <LoginButton handleSubmit={props.handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 300
  }
});

export default LoginCard;

import React, { useState } from "react";

import {
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert
} from "react-native";

const LoginButton = ({ user, password, navigation }) => {
  const [loading, setLoading] = useState(false);

  tryLogin = () => {
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
        navigation.navigate("Main");
        setLoading(false);
      });
    } else {
      setLoading(false);
      Alert.alert("username o password errati, riprovare");
    }
  };

  return (
    <TouchableOpacity style={styles.buttonLogin} onPress={this.tryLogin}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.buttonText}>Login</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    width: 320,
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: "#2980b9"
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  }
});

export default LoginButton;

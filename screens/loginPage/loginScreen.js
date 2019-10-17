import React, { useState } from "react";

import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Image,
  TextInput
} from "react-native";

import LoginButton from "./loginButton";

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.containerLogin}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.Title}
          source={require("../../assets/images/Logo.png")}
        />
        <Image
          style={styles.logo}
          source={require("../../assets/images/Scuola.jpeg")}
        />
        <View style={styles.containerFrom}>
          <TextInput
            placeholder="username"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={usr => setUser(usr)}
          />
          <TextInput
            secureTextEntry
            placeholder="password"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={psw => setPassword(psw)}
          />
          <LoginButton
            user={user}
            password={password}
            navigation={navigation}
          />
        </View>
      </View>
      <View style={styles.fromContainer}></View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  Title: {
    width: 150,
    height: 130,
    marginBottom: 30
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 320,
    height: 106,
    marginBottom: 10
  },
  containerFrom: {
    padding: 20
  },
  input: {
    height: 40,
    width: 320,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF"
  },
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

export default LoginScreen;

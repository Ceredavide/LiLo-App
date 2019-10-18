import React, { useState } from "react";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

const LoginButton = ({ handleSubmit, loading }) => {
  return (
    <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
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

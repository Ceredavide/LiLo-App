import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const LoginButton = ({ handleSubmit, loading }) => {
  return (
    <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
      {loading ? (
        <ActivityIndicator color="white"/>
      ) : (
        <Text style={styles.buttonText}>Login</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    marginTop: hp("4%"),
    height: hp("6%"),
    width: wp("40%"),
    borderRadius: 17,
    backgroundColor: "#009fff",
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  }
});

export default LoginButton;

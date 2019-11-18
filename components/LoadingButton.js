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

const LoadingButton = ({ text, handleSubmit, loading, color }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonLogin, backgroundColor: color }}
      onPress={handleSubmit}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    marginTop: hp("4%"),
    height: hp("6%"),
    width: wp("60%"),
    borderRadius: 17,
    justifyContent: "center"
  },
  buttonText: {
    fontFamily: "open-sans-regular",
    textAlign: "center",
    fontSize: hp("3%"),
    color: "#FFFFFF"
  }
});

export default LoadingButton;

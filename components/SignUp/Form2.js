import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Step2 = ({ handleChange, values }) => {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="email"
        autoCapitalize={false}
        style={styles.textInput}
        onChangeText={handleChange("email")}
        value={values.email}
        returnKeyType="next"
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={handleChange("password")}
        value={values.password}
        returnKeyType="next"
      />
      <TextInput
        placeholder="Conferma la password"
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={handleChange("confirmPassword")}
        value={values.confirmPassword}
        returnKeyType="next"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center"
  },
  textInput: {
    height: hp("5%"),
    width: wp("70%"),
    padding: wp("3%"),
    fontSize: hp("2%"),
    marginBottom: hp("5%"),
    fontFamily: "open-sans-regular",
    borderBottomWidth: 1.5,
    borderBottomColor: "#009fff"
  }
});

export default Step2;

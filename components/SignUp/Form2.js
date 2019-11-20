import React from "react";
import { View, TextInput } from "react-native";

import styles from "../../styles/signUp/Forms";

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

export default Step2;

import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Form1 = ({ values, handleChange, setFieldValue }) => {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Nome"
        style={styles.textInput}
        onChangeText={handleChange("nome")}
        value={values.nome}
        returnKeyType="next"
      />
      <TextInput
        placeholder="Cognome"
        style={styles.textInput}
        onChangeText={handleChange("cognome")}
        value={values.cognome}
        returnKeyType="next"
      />
      <TextInput
        placeholder="Classe"
        style={styles.textInput}
        onChangeText={value => {
          value = value.replace(/\s+/g, "").toUpperCase();
          setFieldValue("classe", value);
        }}
        value={values.classe}
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

export default Form1;

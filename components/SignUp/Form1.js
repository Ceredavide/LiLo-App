import React from "react";
import { View, TextInput } from "react-native";

import styles from "../../styles/signUp/Forms";

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

export default Form1;

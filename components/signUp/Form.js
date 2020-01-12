import React from "react";
import { View, TextInput } from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LoadingButton from "../LoadingButton"
import styles from "../../styles/signUp/Forms";

const Form = ({ values, handleChange, setFieldValue, handleSubmit, isLoading }) => {
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.form}>
      <TextInput
        placeholder="Nome"
        style={{ ...styles.textInput, marginTop: 15 }}
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
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={handleChange("email")}
        value={values.email}
        returnKeyType="next"
      />
      <TextInput
        placeholder="Password"
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
      <LoadingButton handleSubmit={() => handleSubmit()} loading={isLoading} color={"green"} text="Invia" />
    </KeyboardAwareScrollView>
  );
};

export default Form;

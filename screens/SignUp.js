import React, { useState } from "react";
import { StyleSheet, TextInput, Text } from "react-native";

import { Formik, useFormik } from "formik";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LoadingButton from "../components/LoadingButton"
import ErrorText from "../components/ErrorText"
import styles from "../styles/signUp/Forms";

import createUser from "../services/createUser"
import validateSignUp from "../services/validateSignUp"

const SignUp = ({ navigation }) => {
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const tryCreateUser = async (values, navigation) => {
    const errors = validateSignUp(values)
    //Controlla se ci sono errori, se è tutto ok crea l'utente
    if (Object.entries(errors).length === 0) {
      setIsLoading(true)
      await createUser(values, navigation)
      setIsLoading(false)
    }
    setErrors(errors)
  }

  const initialValues = {
    nome: "",
    cognome: "",
    classe: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const formikSignUp = useFormik({
    initialValues: initialValues,
    onSubmit: () => tryCreateUser(values, navigation)
  })

  const { values, handleChange, handleSubmit, setFieldValue } = formikSignUp

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.form}>
      <TextInput
        placeholder="Nome"
        style={{ ...styles.textInput, marginTop: 15 }}
        onChangeText={handleChange("nome")}
        value={values.nome}
        returnKeyType="next"
      />
      <ErrorText error={errors.nome} />
      <TextInput
        placeholder="Cognome"
        style={styles.textInput}
        onChangeText={handleChange("cognome")}
        value={values.cognome}
        returnKeyType="next"
      />
      <ErrorText error={errors.cognome} />
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
      <ErrorText error={errors.classe} />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={handleChange("email")}
        value={values.email}
        returnKeyType="next"
      />
      <Text style={myStyles.emailText}>Inserire la Email inserita nella iscrizione al Liceo</Text>
      <ErrorText error={errors.email} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={handleChange("password")}
        value={values.password}
        returnKeyType="next"
      />
      <ErrorText error={errors.password} />
      <TextInput
        placeholder="Conferma la password"
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={handleChange("confirmPassword")}
        value={values.confirmPassword}
        returnKeyType="next"
      />
      <ErrorText error={errors.confirmPassword} />
      <LoadingButton handleSubmit={() => handleSubmit()} loading={isLoading} color={"green"} text="Invia" />
    </KeyboardAwareScrollView>
  );
};

const myStyles = StyleSheet.create({
  emailText: {
    marginTop: 2,
    fontSize: 12,
    alignSelf: "center",
    color: "grey"
  }
})

export default SignUp;

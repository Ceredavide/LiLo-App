import React from "react";
import { StyleSheet, Text } from "react-native";

import {
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import { TextInput } from "react-native-paper"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LoadingButton from "../components/shared/LoadingButton"
import ErrorText from "../components/shared/ErrorText"

import useSignUp from "../hooks/useSignUp";

import Colors from "../constants/colors"

const SignUp = ({ navigation }) => {

  const { isLoading, formikSignUp } = useSignUp(navigation)

  const { values, handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched } = formikSignUp

  const formTheme = { colors: { text: Colors.white, primary: Colors.secondary, placeholder: Colors.white, background: Colors.main } }

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.form}>
      <TextInput
        label="Nome"
        error={errors.nome && touched.nome}
        mode="outlined"
        theme={formTheme}
        style={{ ...styles.textInput, marginTop: 15 }}
        onChangeText={handleChange("nome")}
        onBlur={handleBlur("nome")}
        value={values.nome}
        returnKeyType="next"
      />
      <ErrorText error={errors.nome} touched={touched.nome} />
      <TextInput
        label="Cognome"
        error={errors.cognome && touched.cognome}
        mode="outlined"
        theme={formTheme}
        style={styles.textInput}
        onChangeText={handleChange("cognome")}
        onBlur={handleBlur("cognome")}
        value={values.cognome}
        returnKeyType="next"
      />
      <ErrorText error={errors.cognome} touched={touched.cognome} />
      <TextInput
        label="Classe"
        error={errors.classe && touched.classe}
        mode="outlined"
        theme={formTheme}
        style={styles.textInput}
        onChangeText={value => {
          value = value.replace(/\s+/g, "").toUpperCase();
          setFieldValue("classe", value);
        }}
        onBlur={handleBlur("classe")}
        value={values.classe}
        returnKeyType="next"
      />
      <ErrorText error={errors.classe} touched={touched.classe} />
      <TextInput
        label="Email"
        keyboardType="email-address"
        error={errors.email && touched.email}
        mode="outlined"
        theme={formTheme}
        style={styles.textInput}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        value={values.email}
        returnKeyType="next"
      />
      {
        errors.email && touched.email ?
          <ErrorText error={errors.email} touched={touched.email} /> :
          <Text style={styles.emailText}>Quella inserita nella iscrizione al Liceo</Text>
      }
      <TextInput
        label="Password"
        secureTextEntry={true}
        error={errors.password && touched.password}
        mode="outlined"
        theme={formTheme}
        style={styles.textInput}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        value={values.password}
        returnKeyType="next"
      />
      <ErrorText error={errors.password} touched={touched.password} />
      <TextInput
        label="Conferma la password"
        secureTextEntry={true}
        error={errors.confirmPassword && touched.confirmPassword}
        mode="outlined"
        theme={formTheme}
        style={styles.textInput}
        onChangeText={handleChange("confirmPassword")}
        onBlur={handleBlur("confirmPassword")}
        value={values.confirmPassword}
        returnKeyType="next"
      />
      <ErrorText error={errors.confirmPassword} touched={touched.confirmPassword} />
      <LoadingButton
        handleSubmit={handleSubmit}
        loading={isLoading}
        color={Object.entries(errors).length === 0 ? "green" : "red"}
        text="Invia" 
        style={{marginBottom: 30}}
        />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: Colors.main,
    paddingBottom: 10
  },
  textInput: {
    width: wp("65%"),
    alignSelf: "center",
    color: Colors.white
  },
  emailText: {
    marginTop: 2,
    marginBottom: 10,
    fontSize: 12,
    alignSelf: "center",
    color: "grey"
  }
})

export default SignUp;

import React from "react";
import { StyleSheet, Platform, TouchableWithoutFeedback, Alert, Linking } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { TextInput } from "react-native-paper"

import LoadingButton from "../../components/shared/LoadingButton"
import Button from "../../components/shared/MyButton"
import ErrorText from "../../components/shared/ErrorText"

import useSignUp from "../../hooks/useSignUp";

import COLORS from "../../constants/COLORS"

const SignUp = ({ navigation }) => {

  const { isLoading, formikSignUp } = useSignUp(navigation)

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formikSignUp

  const formTheme = {
    colors: {
      text: COLORS.white,
      primary: COLORS.secondary,
      placeholder: COLORS.white,
      background: COLORS.main
    }
  }

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <TextInput
            label="Nome:"
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
            label="Cognome:"
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
            label="Email:"
            autoCapitalize="none"
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
          <ErrorText error={errors.email} touched={touched.email} />
          <TextInput
            label="Password:"
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
            label="Conferma la password:"
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
            color={Object.entries(errors).length === 0 ? COLORS.green : COLORS.red}
            text="Invia"
            style={{ marginBottom: hp("1%") }}
          />
          <Button
            text="Problemi a registrarsi?"
            color={null}
            action={toggleAlert}
            style={{ width: wp("50%"), height: hp("3.5%") }}
            textStyle={{ fontSize: hp("1.7%"), color: COLORS.warning }}
          />
        </>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

function toggleAlert() {
  Alert.alert(
    "Mo' che si fa?",
    'Può capitare che le tue credenziali di accesso risultino errate anche se non è il caso, se fosse così invia una mail a davide@cere.dev da una email attendibile con scritto nome, cognome e classe',
    [
      {
        text: 'Annulla',
        onPress: () => { },
        style: 'cancel'
      },
      {
        text: 'Invia Mail',
        onPress: async () => await openMailer()
      }
    ],
    { cancelable: false }
  );
}

async function openMailer() {
  await Linking.openURL('mailto:davide@cere.dev')
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.main,
    paddingTop: Platform.OS === 'ios' ? hp("2%") : null
  },
  textInput: {
    width: wp("65%"),
    alignSelf: "center",
    color: COLORS.white
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

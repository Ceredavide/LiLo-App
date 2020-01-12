import React, { useState } from "react";
import { Alert } from "react-native"

import { Formik } from "formik";

import Form from "../components/signUp/Form"

import createUser from "../services/createUser"

const SignUp = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)

  const habndleUserCreation = (user, navigation) => {
    if (user.password != user.confirmPassword) {
      Alert.alert("Le password che hai inserito sono diverse tra di loro")
    }
    else if (user.nome == "" || user.congnome == "" || user.classe == "" || user.email == "" || user.password == "" || user.confirmPassword == "") {
      Alert.alert("Compila tutti i campi!")
    }
    else {
      setIsLoading(true)
      createUser(user, navigation)
      setIsLoading(false)
    }
  }

  return (
    <Formik
      initialValues={{
        nome: "",
        cognome: "",
        classe: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      onSubmit={values => habndleUserCreation(values, navigation)}
    >
      {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <Form
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </Formik>
  );
};

export default SignUp;

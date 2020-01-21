import React, { useState } from "react";

import { Formik } from "formik";

import Form from "../components/signUp/Form"

import createUser from "../services/createUser"
import validateSignUp from "../services/validateSignUp"

const SignUp = ({ navigation }) => {
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (values, navigation) => {
    const errors = validateSignUp(values)
    if (Object.entries(errors).length === 0) {
      setIsLoading(true)
      createUser(values, navigation)
        .then(status => setIsLoading(status))
    }
    setErrors(errors)
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
      onSubmit={values => handleSubmit(values, navigation)}
    >
      {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <Form
          errors={errors}
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

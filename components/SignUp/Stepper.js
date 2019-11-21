import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import * as firebase from "firebase";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

import { Studenti } from "../../data/studenti";

const Stepper = () => {
  const [error, setError] = useState(false);
  const [indexStudente, setIndexStudente] = useState("");

  handleForm1 = values => {
    const indexStudente = Studenti.findIndex(
      studente =>
        studente.nome.trim().split(" ")[0] === values.nome.trim() &&
        studente.cognome.trim() === values.cognome.trim() &&
        studente.classe.trim() === values.classe.trim()
    );
    if (indexStudente === -1) {
      setError(true);
      Alert.alert(
        "I dati che hai inserito non sembrano appartenere ad uno studente del liceo"
      );
    } else {
      setError(false);
      setIndexStudente(indexStudente);
    }
  };

  handleForm2 = values => {
    if (Studenti[indexStudente].email.trim() === values.email.trim()) {
      if (values.password === values.confirmPassword) {
        setError(false);
      } else {
        setError(true);
        Alert.alert("Le password inserite non sono uguali");
      }
    } else {
      setError(true);
      Alert.alert("la email inserita non è corretta");
    }
  };

  createUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        Alert.alert(error.message);
      });
  };

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
      onSubmit={values => trySignUp(values.email, values.password)}
    >
      {({ values, handleChange, setFieldValue }) => (
        <View style={styles.stepper}>
          <ProgressSteps
            progressBarColor="#009fff"
            activeStepIconBorderColor="#009fff"
            activeLabelColor="#009fff"
            completedStepIconColor="#009fff"
            completedProgressBarColor="#009fff"
          >
            {/* // 
             Step 1 : nome, cognome e classe
            // */}
            <ProgressStep
              nextBtnText="Avanti"
              onNext={() => handleForm1(values)}
              errors={error}
            >
              <Form1
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            </ProgressStep>
            {/* // 
             Step 2 : email e password
            // */}
            <ProgressStep
              previousBtnText="Indietro"
              nextBtnText="Avanti"
              onNext={() => handleForm2(values)}
              errors={error}
            >
              <Form2 values={values} handleChange={handleChange} />
            </ProgressStep>
            {/* // 
             Step 3 : immagine stupida
            // */}
            <ProgressStep
              previousBtnText="Indietro"
              finishBtnText="Registrati"
              onSubmit={() => createUser(values.email, values.password)}
            >
              <Form3 />
            </ProgressStep>
          </ProgressSteps>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  stepper: {
    flex: 1
  },
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
  },
  image: {
    height: hp("50"),
    width: wp("80%")
  }
});

export default Stepper;

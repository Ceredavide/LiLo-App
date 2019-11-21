import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import firebase from "firebase";
import "@firebase/firestore";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";

import MyButton from "../MyButton";

const FormProposta = () => {
  const postProposta = (nome, descrizione, richieste) => {
    const db = firebase.firestore();
    db.collection("proposte")
      .add({
        nome: nome,
        descrizione: descrizione,
        richieste: richieste,
        numeroPartecipantiMax: 30
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.log("Error adding document: ", error);
      });
  };

  return (
    <Formik
      initialValues={{ nome: "", descrizione: "", richieste: "" }}
      onSubmit={values =>
        postProposta(values.nome, values.descrizione, values.richieste)
      }
    >
      {props => (
        <View style={styles.container}>
          <Text style={styles.text}>Nome Attività:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={props.handleChange("nome")}
            value={props.values.nome}
          />
          <Text style={styles.text}>Descrizione:</Text>
          <TextInput
            style={styles.textArea}
            onChangeText={props.handleChange("descrizione")}
            value={props.values.descrizione}
            multiline={true}
            numberOfLines={4}
          />
          <Text style={styles.text}>Richieste Particolari:</Text>
          <TextInput
            style={{ ...styles.textInput, marginBottom: hp("4%") }}
            onChangeText={props.handleChange("richieste")}
            value={props.values.richieste}
          />
          <MyButton action={props.handleSubmit} text="Invia" color="#1ed15a" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    alignSelf: "flex-start",
    fontSize: hp("3%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
    marginBottom: hp("1%")
  },
  textInput: {
    height: hp("8%"),
    width: wp("80%"),
    padding: wp("3%"),
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2
  },
  textArea: {
    height: hp("20%"),
    width: wp("80%"),
    padding: wp("3%"),
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2
  }
});

export default FormProposta;

import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import postProposta from "../../services/postProposta"

import LoadingButton from "../LoadingButton";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleProposta = async ({ nome, descrizione, richieste, numeroPartecipanti }) => {
    setIsLoading(true)
    postProposta(nome, descrizione, numeroPartecipanti, richieste)
      .then(() => { setIsLoading(false)})
  }

  return (
    <Formik
      initialValues={{
        nome: "",
        descrizione: "",
        richieste: "",
        numeroPartecipanti: ""
      }}
      onSubmit={(values) => handleProposta(values)}
    >
      {props => (
        <KeyboardAwareScrollView extraScrollHeight={hp("8%")} showsVerticalScrollIndicator={false}>
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
            <Text style={styles.text}>Numero Partecipanti:</Text>
            <TextInput
              style={{ ...styles.textInput }}
              onChangeText={props.handleChange("numeroPartecipanti")}
              value={props.values.numeroPartecipanti}
              keyboardType="numeric"
            />
            <Text style={styles.text}>Richieste Particolari:</Text>
            <TextInput
              style={{ ...styles.textInput, marginBottom: hp("4%") }}
              onChangeText={props.handleChange("richieste")}
              value={props.values.richieste}
            />
            <LoadingButton
              handleSubmit={props.handleSubmit}
              loading={isLoading}
              text="Invia"
              color="#1ed15a"
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: hp("5%")
  },
  text: {
    alignSelf: "flex-start",
    fontSize: hp("3%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
    marginBottom: hp("1%")
  },
  textInput: {
    alignSelf: "center",
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
    alignSelf: "center",
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

export default Form;

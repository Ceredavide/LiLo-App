import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";

import { postProposta } from "../../store/actions/proposte";

import LoadingButton from "../LoadingButton";

const Form = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isLoading = useSelector(state => state.proposte.loading);

  return (
    <Formik
      initialValues={{
        nomeProposta: "",
        descrizione: "",
        richieste: "",
        numeroPartecipanti: ""
      }}
      onSubmit={values => dispatch(postProposta(values, user))}
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
          <LoadingButton
            handleSubmit={props.handleSubmit}
            loading={isLoading}
            text="Invia"
            color="#1ed15a"
          />
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

export default Form;

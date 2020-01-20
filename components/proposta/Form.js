import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { postProposta } from "../../store/actions/proposte"

import LoadingButton from "../LoadingButton";
import ErrorText from "../../components/ErrorText"
import validateProposta from "../../services/validateProposta"

const Form = ({ navigation }) => {
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.proposte.loadingPost)

  const handleSubmit = values => {
    const errors = validateProposta(values)
    if (Object.entries(errors).length === 0) {
      dispatch(postProposta(values, navigation))
    }
    setErrors(errors)
  }

  return (
    <Formik
      initialValues={{
        nome: null,
        descrizione: null,
        numeroPartecipantiMax: null,
        richieste: null
      }}
      onSubmit={values => handleSubmit(values)}
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
            <ErrorText error={errors.nome} />
            <Text style={styles.text}>Descrizione:</Text>
            <TextInput
              style={styles.textArea}
              onChangeText={props.handleChange("descrizione")}
              value={props.values.descrizione}
              multiline={true}
              numberOfLines={4}
            />
            <ErrorText error={errors.descrizione} />
            <Text style={styles.text}>Numero Partecipanti:</Text>
            <TextInput
              style={{ ...styles.textInput }}
              onChangeText={props.handleChange("numeroPartecipantiMax")}
              value={props.values.numeroPartecipantiMax}
              keyboardType="numeric"
            />
            <ErrorText error={errors.numeroPartecipantiMax} />
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
    paddingTop:hp("3%"),
    paddingBottom: hp("5%")
  },
  text: {
    alignSelf: "flex-start",
    fontSize: hp("3%"),
    marginLeft: wp("5%"),
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
    padding: wp("5%"),
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

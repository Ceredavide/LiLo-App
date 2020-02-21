import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux"

import { useFormik } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { postComunicazione } from "../store/actions/comunicazioni"

import ImagePicker from "../components/newComunicazione/ImagePicker";
import LoadingButton from "../components/LoadingButton"
import ErrorText from "../components/ErrorText"

import validateComunicazione from "../services/validateComunicazione"

const NewComunicazioneScreen = ({ navigation }) => {
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.comunicazioni.isLoadingPost)

  const tryPostComunicazione = values => {
    const errors = validateComunicazione(values)
    if (Object.entries(errors).length === 0) {
      dispatch(postComunicazione(values, navigation))
    }
    setErrors(errors)
  }

  const formikNuovaComunicazione = useFormik({
    initialValues: { titolo: null, sottotitolo: null, paragrafo: null, image: null },
    onSubmit: tryPostComunicazione
  })

  const { values, handleChange, setFieldValue, handleSubmit } = formikNuovaComunicazione

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.form}>
      <TextInput
        placeholder="Titolo"
        style={{ ...styles.textInput, marginTop: hp("5%"), }}
        onChangeText={handleChange("titolo")}
        value={values.titolo}
        returnKeyType="next"
      />
      <ErrorText error={errors.titolo} />
      <TextInput
        placeholder="Sottotitolo"
        style={styles.textInput}
        onChangeText={handleChange("sottotitolo")}
        value={values.sottotitolo}
        returnKeyType="next"
      />
      <ErrorText error={errors.sottotitolo} />
      <TextInput
        placeholder="Paragrafo"
        multiline={true}
        numberOfLines={5}
        style={styles.textArea}
        onChangeText={handleChange("paragrafo")}
        value={values.paragrafo}
        returnKeyType="next"
      />
      <ErrorText error={errors.paragrafo} />
      <ImagePicker image={values.image} setFieldValue={setFieldValue} />
      <ErrorText error={errors.image} />
      <LoadingButton
        text="avanti"
        color="red"
        loading={isLoading}
        handleSubmit={() => handleSubmit()}
        style={{ marginBottom: hp("5%") }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: wp("100%"),
    backgroundColor: "#F1F5F9",
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

export default NewComunicazioneScreen;

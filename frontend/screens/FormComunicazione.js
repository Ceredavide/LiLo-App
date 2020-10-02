import React, { useContext } from "react";
import { StyleSheet, ScrollView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux"

import { useFormik } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { postComunicazione } from "../store/actions/comunicazioni"

import ImagePicker from "../components/formComunicazione/ImagePicker";
import TagSelector from '../components/formComunicazione/TagSelector'
import LoadingButton from "../components/shared/LoadingButton"
import ErrorText from "../components/shared/ErrorText"

import comunicazioneSchema from "../validation/comunicazioneSchema"

import { AuthContext } from "../Context"

import Colors from "../constants/colors"

const NewComunicazioneScreen = ({ navigation, route }) => {

  const { comunicazione } = route.params

  const { auth } = useContext(AuthContext)

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.comunicazioni.isLoadingPost)
  const tags = useSelector(state => state.comunicazioni.tags)

  const formikNuovaComunicazione = useFormik({
    initialValues: comunicazione || {
      titolo: "",
      sottotitolo: "",
      paragrafo: "",
      tags: [],
      immagine: null,
    },
    validationSchema: comunicazioneSchema,
    onSubmit: values => dispatch(postComunicazione(values, navigation, auth.token))
  })

  const { values, handleChange, setFieldValue, errors, handleSubmit } = formikNuovaComunicazione

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screen}
    >
      <TextInput
        placeholder="Titolo:"
        style={{ ...styles.textInput, marginTop: hp("5%"), }}
        placeholderTextColor={Colors.main}
        onChangeText={handleChange("titolo")}
        value={values.titolo}
        returnKeyType="next"
      />
      <ErrorText error={errors.titolo} />
      <TextInput
        placeholder="Sottotitolo:"
        style={styles.textInput}
        placeholderTextColor={Colors.main}
        onChangeText={handleChange("sottotitolo")}
        value={values.sottotitolo}
        returnKeyType="next"
      />
      <ErrorText error={errors.sottotitolo} />
      <TextInput
        placeholder="Paragrafo:"
        multiline={true}
        numberOfLines={5}
        style={styles.textArea}
        placeholderTextColor={Colors.main}
        onChangeText={handleChange("paragrafo")}
        value={values.paragrafo}
        returnKeyType="next"
      />
      <ErrorText error={errors.paragrafo} />
      <TagSelector
        tags={tags}
        setFieldValue={setFieldValue}
        selectedTags={values.tags}
      />
      <ImagePicker
        immagine={values.immagine}
        setFieldValue={setFieldValue}
      />
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
  screen: {
    flex: 1,
    backgroundColor: Colors.main,
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

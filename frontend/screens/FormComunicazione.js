import React from "react";
import { StyleSheet, ScrollView, TextInput } from "react-native";
import { useSelector } from "react-redux"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import useFormComunicazione from '../hooks/useFormComunicazione'

import Screen from "../components/shared/Screen"
import ImagePicker from "../components/comunicazioni/form/ImagePicker";
import TagSelector from '../components/comunicazioni/form/TagSelector'
import LoadingButton from "../components/shared/LoadingButton"
import ErrorText from "../components/shared/ErrorText"

import Colors from "../constants/colors"

const NewComunicazioneScreen = ({ navigation, route }) => {

  const comunicazione = route.params?.comunicazione

  const { formikComunicazione } = useFormComunicazione(comunicazione, navigation)

  const {
    values,
    handleChange,
    setFieldValue,
    errors,
    handleSubmit
  } = formikComunicazione

  const isLoading = useSelector(state => state.comunicazioni.isLoadingPost)
  const tags = useSelector(state => state.comunicazioni.tags)

  return (
    <Screen scrollable={true} >
      <TextInput
        placeholder="Titolo:"
        style={{ ...styles.textInput, marginTop: hp("1%"), }}
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
        handleSubmit={handleSubmit}
        style={{ marginBottom: hp("5%") }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
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

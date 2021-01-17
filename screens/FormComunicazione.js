import React from "react";
import { StyleSheet, TouchableWithoutFeedback, TextInput, Keyboard } from "react-native";
import { useSelector } from "react-redux"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import useFormComunicazione from '../hooks/useFormComunicazione'

import ImagePicker from "../components/comunicazioni/form/ImagePicker";
import TagSelector from '../components/comunicazioni/form/TagSelector'
import LoadingButton from "../components/shared/LoadingButton"
import ErrorText from "../components/shared/ErrorText"

import Colors from "../constants/colors"

const NewComunicazioneScreen = ({ navigation, route }) => {

  const comunicazione = route.params?.comunicazione

  const isEditing = !!comunicazione

  const { formikComunicazione } = useFormComunicazione(comunicazione, navigation)

  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    errors,
    touched,
    handleSubmit
  } = formikComunicazione

  const { isLoadingPost, isLoadingEdit } = useSelector(state => state.comunicazioni)
  const tags = useSelector(state => state.comunicazioni.tags)

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <TextInput
            placeholder="Titolo:"
            style={{ ...styles.textInput, marginTop: hp("1%"), }}
            placeholderTextColor={Colors.main}
            onChangeText={handleChange("titolo")}
            onBlur={handleBlur("titolo")}
            value={values.titolo}
            returnKeyType="next"
          />
          <ErrorText error={errors.titolo} touched={touched.titolo} />
          <TextInput
            placeholder="Sottotitolo:"
            style={styles.textInput}
            placeholderTextColor={Colors.main}
            onChangeText={handleChange("sottotitolo")}
            onBlur={handleBlur("sottotitolo")}
            value={values.sottotitolo}
            returnKeyType="next"
          />
          <ErrorText error={errors.sottotitolo} touched={touched.sottotitolo} />
          <TextInput
            placeholder="Paragrafo:"
            multiline={true}
            numberOfLines={5}
            style={styles.textArea}
            placeholderTextColor={Colors.main}
            onChangeText={handleChange("paragrafo")}
            onBlur={handleBlur("paragrafo")}
            value={values.paragrafo}
            returnKeyType="next"
          />
          <ErrorText error={errors.paragrafo} touched={touched.paragrafo} />
          <TagSelector
            tags={tags}
            setFieldValue={setFieldValue}
            selectedTags={[...values.tags]}
          />
          <ImagePicker
            immagine={values.immagine}
            setFieldValue={setFieldValue}
          />
          <ErrorText error={errors.image} touched={touched.image} />
          <LoadingButton
            text="avanti"
            color="red"
            loading={isEditing ? isLoadingEdit : isLoadingPost}
            handleSubmit={handleSubmit}
            style={{ marginBottom: hp("5%") }}
          />
        </>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.main
  },
  textInput: {
    alignSelf: "center",
    height: hp("8%"),
    width: wp("70%"),
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
    width: wp("70%"),
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

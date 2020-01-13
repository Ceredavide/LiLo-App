import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput } from "react-native";

import { Formik } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import postComunicazione from "../services/postComunicazione"

import ImagePicker from "../components/newComunicazione/ImagePicker";
import LoadingButton from "../components/LoadingButton"
import MyButton from "../components/MyButton";

const NewComunicazioneScreen = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handlePost = async ({ titolo, sottotitolo, paragrafo, image }) => {
    setIsLoading(true)
    postComunicazione(titolo, sottotitolo, paragrafo, image)
      .then(() => setIsLoading(false))
  }

  return (
    <Formik
      initialValues={{ titolo: "", sottotitolo: "", paragrafo: "", image: null }}
      onSubmit={values => handlePost(values)}
    >
      {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.form}>
          <TextInput
            placeholder="Titolo"
            style={styles.textInput}
            onChangeText={handleChange("titolo")}
            value={values.titolo}
            returnKeyType="next"
          />
          <TextInput
            placeholder="Sottotitolo"
            style={styles.textInput}
            onChangeText={handleChange("sottotitolo")}
            value={values.sottotitolo}
            returnKeyType="next"
          />
          <TextInput
            placeholder="Paragrafo"
            multiline={true}
            numberOfLines={5}
            style={styles.textArea}
            onChangeText={handleChange("paragrafo")}
            value={values.paragrafo}
            returnKeyType="next"
          />
          <ImagePicker image={values.image} setFieldValue={setFieldValue} />
          <LoadingButton text="avanti" color="red" loading={isLoading} handleSubmit={() => handleSubmit()} />
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    //alignItems: "center",
    //margin: hp("8%")
  },
  textInput: {
    height: hp("5%"),
    width: wp("70%"),
    paddingLeft: wp("3%"),
    fontSize: hp("2%"),
    marginBottom: hp("5%"),
    fontFamily: "open-sans-regular",
    borderBottomWidth: 1.5,
    borderBottomColor: "#009fff"
  },
  textArea: {
    height: hp("20%"),
    width: wp("70%"),
    paddingLeft: wp("3%"),
    fontSize: hp("2%"),
    marginTop: hp("3%"),
    marginBottom: hp("5%"),
    fontFamily: "open-sans-regular",
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: "#009fff"
  }
});

export default NewComunicazioneScreen;

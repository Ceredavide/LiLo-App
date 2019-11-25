import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useDispatch } from "react-redux";

import { Formik } from "formik";

import ImagePicker from "../components/newComunicazione/ImagePicker";
import MyButton from "../components/MyButton";

import { postComunicazione } from "../store/actions/comunicazioni";

const NewComunicazioneScreen = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ titolo: "", sottotitolo: "", testo: "", image: null }}
      onSubmit={values => dispatch(postComunicazione(values))}
    >
      {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <View style={styles.form}>
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
            placeholder="Testo"
            style={styles.textInput}
            onChangeText={handleChange("testo")}
            value={values.testo}
            returnKeyType="next"
          />
          <ImagePicker image={values.image} setFieldValue={setFieldValue} />
          <MyButton action={() => handleSubmit()} text="avanti" color="red" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center"
  }
});

export default NewComunicazioneScreen;

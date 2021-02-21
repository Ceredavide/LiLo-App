import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import { postProposta } from "../../../store/actions/proposte"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { useFormik } from "formik"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import propostaSchema from "../../../validation/propostaSchema"

import LoadingButton from "../../../components/shared/LoadingButton"
import ErrorText from "../../../components/shared/ErrorText"

import COLORS from "../../../constants/colors"

const FormPropostaScreen = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.proposte.loadingPost)

    const formikProposta = useFormik({
        initialValues: {
            nome: "",
            descrizione: "",
            relatore: "",
            richieste: ""
        },
        validationSchema: propostaSchema,
        onSubmit: values => dispatch(postProposta(values))
    })

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formikProposta

    return (
        <KeyboardAwareScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>Nome Attività:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={handleChange("nome")}
                onBlur={handleBlur("nome")}
                value={values.nome}
            />
            <ErrorText error={errors.nome} touched={touched.nome} />
            <Text style={styles.text}>Relatore:</Text>
            <TextInput
                style={{ ...styles.textInput }}
                onChangeText={handleChange("relatore")}
                onBlur={handleBlur("relatore")}
                value={values.relatore}
                keyboardType="numeric"
            />
            <ErrorText error={errors.relatore} touched={touched.relatore} />
            <Text style={styles.text}>Descrizione:</Text>
            <TextInput
                style={styles.textArea}
                onChangeText={handleChange("descrizione")}
                onBlur={handleBlur("descrizione")}
                value={values.descrizione}
                multiline={true}
                numberOfLines={4}
            />
            <ErrorText error={errors.descrizione} touched={touched.descrizione} />
            <Text style={styles.text}>Richieste Particolari:</Text>
            <TextInput
                style={{ ...styles.textInput, height: hp("8%") ,marginBottom: hp("2%") }}
                onChangeText={handleChange("richieste")}
                onBlur={handleBlur("richieste")}
                value={values.richieste}
            />
            <LoadingButton
                handleSubmit={handleSubmit}
                loading={isLoading}
                text="Invia"
                color={Object.entries(errors).length === 0 ? COLORS.green : COLORS.red}
                style={{ marginBottom: hp("7%") }}
            />
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.main,
        paddingTop: hp("3%")
    },
    text: {
        marginBottom: hp("1%"),
        alignSelf: "flex-start",
        fontSize: hp("3%"),
        fontFamily: "open-sans-regular",
        marginLeft: wp("10%"),
        color: COLORS.white
    },
    textInput: {
        alignSelf: "center",
        height: hp("5%"),
        width: wp("80%"),
        padding: wp("2.5%"),
        backgroundColor: "white",
        borderRadius: 10
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

export default FormPropostaScreen;

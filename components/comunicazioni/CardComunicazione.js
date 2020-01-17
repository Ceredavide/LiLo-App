import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { useDispatch } from "react-redux"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { deleteComunicazione } from "../../store/actions/comunicazioni"

const CardComunicazione = ({ id, titolo, sottotitolo, immagine }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{titolo}</Text>
            <Text style={styles.paragraph}>{sottotitolo}</Text>
            <View style={styles.buttonContainer}>
                <Button title="elimina" onPress={() => dispatch(deleteComunicazione(id, immagine))} color="red" />
                <Button title="modifica" onPress={() => alert("coming soon")} color="#F2AA3E" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: hp("3%"),
        width: wp("90%"),
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        marginBottom: 5
    },
    paragraph: {
        fontFamily: "open-sans-regular",
        fontSize: 16
    },
    buttonContainer: {
        marginTop: hp("2%"),
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

export default CardComunicazione
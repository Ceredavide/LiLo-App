import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const CardComunicazione = ({ titolo, sottotitolo }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{titolo}</Text>
            <Text style={styles.paragraph}>{sottotitolo}</Text>
            <View style={styles.buttonContainer}>
                <Button title="elimina" onPress={() => console.log("bella")} color="red" />
                <Button title="modifica" onPress={() => console.log("bella")} color="#F2AA3E" />
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
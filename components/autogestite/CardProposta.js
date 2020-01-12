import React from "react"
import { View, Text, StyleSheet } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const CardProposte = ({ proposta }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{proposta.nome}:</Text>
            <Text style={styles.text}>{proposta.descrizione}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: wp("2%"),
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
    title:{
        fontFamily: "open-sans-bold",
        fontSize: 16,
        marginBottom: 5
    },
    descrizione: {
        fontFamily: "open-sans-regular",
        fontSize: 12
      }
})

export default CardProposte
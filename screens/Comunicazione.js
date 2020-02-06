import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Image, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import axios from "axios"

const Comunicazione = ({ navigation }) => {
    const [image, setImage] = useState(null)
    const { titolo, sottotitolo, paragrafo, immagine } = navigation.getParam("comunicazione")

    useEffect(() => {
        axios.get(`https://cere.dev/uploads/${immagine}`)
            .then(response => {
                setImage(response.data.uri)
            }).catch(error => setImage(null))
    }, [])
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerImage}>
                {!image ? null : <Image style={styles.image} source={{ uri: image }} />}
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{titolo}</Text>
                <Text style={styles.subtitle}>{sottotitolo}</Text>
            </View>
            <View style={styles.containerParagraph}>
                <Text style={styles.paragraph}>{paragrafo}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    containerImage: {
        marginTop: hp("2%"),
        alignSelf: "center",
        width: wp("85%"),
        height: wp("85%"),
    },
    image: {
        width: wp("85%"),
        height: wp("85%"),
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "#F1F5F9",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    containerTitle: {
        marginTop: hp("2%"),
        marginLeft: wp("12%"),
        width: wp("75%"),
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: hp("4%"),
    },
    subtitle: {
        fontFamily: "open-sans-regular",
        fontSize: hp("2.5%")
    },
    containerParagraph: {
        paddingTop: hp("3%"),
        paddingBottom: hp("5%"),
        width: wp("85%"),
        alignSelf: "center",
    },
    paragraph: {
        fontFamily: "open-sans-regular",
        fontSize: hp("2%"),
        textAlign: "justify"
    }
})

export default Comunicazione
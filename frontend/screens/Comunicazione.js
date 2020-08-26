import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, ImageBackground, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import axios from "axios"

import TransitionView from "../components/shared/TransitionView"
import FloatingButton from "../components/shared/FloatingButton"

import Colors from "../constants/colors"

const Comunicazione = ({ route, navigation }) => {
    const { comunicazione } = route.params
    const { titolo, sottotitolo, paragrafo, immagine } = comunicazione
    const [image, setImage] = useState(null)


    useEffect(() => {
        axios.get(`https://cere.dev/uploads/${immagine}`)
            .then(response => {
                setImage(response.data.uri)
            }).catch(error => setImage(null))
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.main }}>
            <ScrollView style={styles.container}>
                <View style={styles.containerImage}>
                    {!image ? null :
                        <TransitionView>
                            <ImageBackground style={styles.image} source={{ uri: image }} >
                                <FloatingButton
                                    iconName="arrowleft"
                                    action={navigation.goBack}
                                    style={styles.floatingButton}
                                    color={Colors.white}
                                />
                            </ImageBackground>
                        </TransitionView>
                    }
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.title}>{titolo}</Text>
                    <Text style={styles.subtitle}>{sottotitolo}</Text>
                    <Text style={styles.paragraph}>{paragrafo}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.main,
    },
    containerImage: {
        alignSelf: "center",
        width: wp("100%"),
        height: wp("100%"),
    },
    image: {
        width: wp("100%"),
        height: wp("100%"),
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
    title: {
        fontFamily: "open-sans-bold",
        fontSize: hp("4%"),
        color: Colors.white
    },
    subtitle: {
        fontFamily: "open-sans-regular",
        fontSize: hp("2.5%"),
        marginBottom: hp("3%"),
        color: Colors.white
    },
    containerText: {
        paddingTop: hp("3%"),
        paddingBottom: hp("5%"),
        width: wp("85%"),
        alignSelf: "center",
    },
    paragraph: {
        fontFamily: "open-sans-regular",
        fontSize: hp("2%"),
        textAlign: "justify",
        color: Colors.white
    }
})

export default Comunicazione
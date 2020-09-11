import React, { useState, useEffect } from "react";
import { ActivityIndicator, Image, View, StyleSheet } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import axios from "axios"

const LoadableImage = ({ immagine }) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        axios.get(`https://cere.dev/uploads/${immagine}`)
            .then(response => {
                setImage(response.data.uri)
            })
    }, [])

    return (
        <View style={styles.container}>
            {!image ? <ActivityIndicator /> : <Image style={styles.image} source={{ uri: image }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        height: hp("8%"),
        width: hp("8%"),
        marginLeft: wp("2%"),
        backgroundColor: "#4a86ff",
        minHeight: hp("10%")
    },
    image: {
        alignSelf: "center",
        height: hp("10%"),
        width: hp("10%"),
        backgroundColor: "#FFF",
        borderRadius: 10
    },
})
export default LoadableImage
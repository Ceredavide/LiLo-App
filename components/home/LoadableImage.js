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
        height: hp("11%"),
        width: hp("11%"),
        margin: wp("4%"),
        borderRadius: 20,
        backgroundColor: "#F2F2F2"
    },
    image: {
        alignSelf: "center",
        height: hp("11%"),
        width: hp("11%"),
        borderRadius: 20,
        backgroundColor: "#F2F2F2"
    },
})
export default LoadableImage
import React from "react"
import { StyleSheet } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { PlaceholderMedia } from "rn-placeholder"

const ImageHolder = () => {
    return (
        <PlaceholderMedia style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        height: hp("11%"),
        width: hp("11%"),
        marginRight: wp("2%"),
        borderRadius: 20,
    }
})

export default ImageHolder
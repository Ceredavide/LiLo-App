import React from "react"
import { StyleSheet, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ErrorText = ({ error, style = null }) => {
    if (error === null) {
        return null
    }
    else {
        return <Text style={{ ...styles.errorText, ...style }}>
            {error}
        </Text>

    }
}

const styles = StyleSheet.create({
    errorText: {
        textAlign: "center",
        width: wp("75%"),
        marginTop: hp("1%"),
        marginBottom: hp("2%"),
        fontFamily: "open-sans-regular",
        color: "red",
        alignSelf: "center"
    }
})

export default ErrorText
import React from "react"
import { StyleSheet, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Colors from "../../constants/colors"

const ErrorText = ({ error, touched = false, style = null }) => {
    return (
        <Text style={{ ...styles.errorText, ...style }}>
            {touched ? error : null}
        </Text>
    )
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: hp("1.5%"),
        textAlign: "center",
        width: wp("75%"),
        marginTop: hp("0.5%"),
        marginBottom: hp("2%"),
        fontFamily: "open-sans-regular",
        color: Colors.red,
        alignSelf: "center"
    }
})

export default ErrorText
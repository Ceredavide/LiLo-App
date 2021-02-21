import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { MaterialIcons as Icon } from '@expo/vector-icons'

const Button = ({ text, iconName, color, action }) => {

    const buttonStyle = { ...styles.button, backgroundColor: color }

    return (
        <TouchableOpacity onPress={action} style={buttonStyle}>
            <Icon name={iconName} size={hp("6%")} color="#FFF" />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: wp("40%"),
        height: hp("15%"),
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },
    text: {
        color: "#FFFF",
        marginTop: hp("1%"),
        fontSize: hp("1.8%"),
        fontFamily: "open-sans-regular",
    }
})

export default Button
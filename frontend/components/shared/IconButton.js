import React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

import Icon from "react-native-vector-icons/MaterialIcons"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const IconButton = ({ action, iconName, text, backgroundColor, primaryColor }) => {
    return (
        <TouchableOpacity onPress={action}>
            <View style={{ ...styles.button, backgroundColor: backgroundColor }} >
                <Icon name={iconName} color={primaryColor} />
                <Text style={{ ...styles.text, color: primaryColor }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: hp("6%"),
        width: wp("60%"),
        borderRadius: 20,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        fontSize: wp("5.5%"),
        fontFamily: "open-sans-regular"
    }
})

export default IconButton
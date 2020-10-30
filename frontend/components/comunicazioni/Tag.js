import React from 'react'
import { StyleSheet, View, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import getContrastColor from "../../utils/getContrastColor"

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Tag = ({ tag, style = {}, textStyle = {} }) => {

    const { nome, iconName, colore } = tag

    return (
        <View style={{ ...styles.tag, backgroundColor: colore, ...style }}>
            <Icon name={iconName} size={hp("1.4%")} color={getContrastColor(colore)} />
            <Text style={{ ...styles.text, color: getContrastColor(colore), ...textStyle }}>{nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: wp("2%"),
        marginLeft: wp("2%"),
        height: hp("2.3%"),
        borderRadius: 20,
        backgroundColor: "black"
    },
    text: {
        fontSize: hp('1.4%'),
        marginLeft: wp("1%"),
        fontFamily: "open-sans-regular",
    }
})

export default Tag
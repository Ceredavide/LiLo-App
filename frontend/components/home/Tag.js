import React from 'react'
import { StyleSheet, View, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Tag = ({ tag }) => {

    const { text, iconName, color } = tag

    return (
        <View style={{ ...styles.tag, backgroundColor: color }}>
            <Icon name={iconName} size={hp("1.2%")} color="black" />
            <Text style={styles.text}>{text}</Text>
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
        fontSize: hp('1%'),
        marginLeft: wp("1%"),
        fontFamily: "open-sans-regular",
    }
})

export default Tag
import React from "react"
import { StyleSheet, StatusBar, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { AntDesign } from "@expo/vector-icons";


import COLORS from "../../constants/COLORS"

const AuthHeader = (props) => {

    const { navigation } = props

    let options = props.scene.descriptor.options

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.header}>
                <StatusBar barStyle="light-content" backgroundColor={COLORS.main} />
                <AntDesign name="arrowleft" color={COLORS.secondary} size={hp("4%")} onPress={() => navigation.goBack()} style={styles.icon} />
                <Text style={styles.title}>{options.title}</Text>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    header: {
        height: hp("13%"),
        alignItems: "center",
        backgroundColor: COLORS.main
    },
    icon: {
        alignSelf: "flex-start",
        marginTop: hp("1%"),
        marginLeft: wp("5%")
    },
    title: {
        fontFamily: "open-sans-regular",
        fontSize: hp("4.5%"),
        marginTop: -hp("2%"),
        color: COLORS.secondary
    }
})

export default AuthHeader
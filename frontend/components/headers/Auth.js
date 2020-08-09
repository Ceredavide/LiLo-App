import React from "react"
import { StyleSheet, StatusBar, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/MaterialIcons"

import Colors from "../../constants/colors"

const AuthHeader = (props) => {

    const { navigation } = props

    let options = props.scene.descriptor.options

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.header}>
                <StatusBar barStyle="light-content" backgroundColor={Colors.main} />
                <Icon name="arrow-back" color={Colors.secondary} size={hp("4%")} onPress={() => navigation.goBack()} style={styles.icon} />
                <Text style={styles.title}>{options.title}</Text>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    header: {
        height: hp("13%"),
        alignItems: "center",
        backgroundColor: Colors.main
    },
    icon: {
        alignSelf: "flex-start",
        marginTop: hp("1%"),
        marginLeft: wp("5%")
    },
    title: {
        fontSize: hp("4.5%"),
        marginTop: -hp("2%"),
        color: Colors.secondary
    }
})

export default AuthHeader
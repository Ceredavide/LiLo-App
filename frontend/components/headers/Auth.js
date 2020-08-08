import React from "react"
import { StyleSheet, StatusBar, SafeAreaView, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/MaterialIcons"

import Colors from "../../constants/colors"

const AuthHeader = (props) => {

    console.log(props)

    const { navigation } = props

    return (
        <SafeAreaView style={styles.header}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.main}/>
            <Icon name="arrow-back" color={Colors.secondary} size={hp("4")} onPress={() => navigation.goBack()} style={styles.icon} />
            <Text style={styles.title}>Registrazione</Text>
        </SafeAreaView>
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
        fontSize: hp("4%"),
        marginTop: -hp("2%"),
        color: Colors.secondary
    }
})

export default AuthHeader
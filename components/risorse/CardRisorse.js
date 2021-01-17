import React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import * as WebBrowser from 'expo-web-browser';

import { MaterialIcons as Icon } from '@expo/vector-icons'

import Colors from "../../constants/colors"

const CardRisorse = ({ risorsa }) => {

    const { nome, iconName, url } = risorsa

    return (
        <TouchableOpacity onPress={async () => await WebBrowser.openBrowserAsync(url)}>
            <View style={styles.container}>
                <Text style={styles.text}>{nome}</Text>
                <Icon name={iconName} color={Colors.main} size={hp("5%")} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: hp("2%"),
        paddingHorizontal: wp("5%"),
        backgroundColor: Colors.white,
        height: hp("10%"),
        width: wp("80%"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20
    },
    text: {
        color: Colors.main,
        fontSize: hp("3.4%"),
        fontFamily: "open-sans-regular"
    }
})

export default CardRisorse
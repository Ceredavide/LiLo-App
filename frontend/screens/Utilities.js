import React from "react"
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import * as WebBrowser from 'expo-web-browser';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Screen from "../components/shared/Screen"
import TransitionView from "../components/shared/TransitionView"

import Constants from "../constants/app"
import Colors from "../constants/colors"

const Utilities = ({ navigation }) => {

    return (
        <Screen style={styles.screen}>
            <TransitionView>
                <View style={styles.row}>
                    <Button
                        text="Autogestite"
                        iconName="star"
                        action={() => Alert.alert('Coming Soon.')}
                    />
                    <Button
                        text="Mappa"
                        iconName="map"
                        action={() => WebBrowser.openBrowserAsync(Constants.URL_MAP)}
                    />
                </View>
            </TransitionView>
            <TransitionView index={1}>
                <View style={styles.row}>
                    <Button
                        text="Risorse"
                        iconName="format-list-checkbox"
                        action={() => navigation.navigate("Risorse")}
                    />
                    <Button
                        text="Lettore QR"
                        iconName="qrcode"
                        action={() => navigation.navigate("Scanner")}
                    />
                </View>
            </TransitionView>
        </Screen>
    )

}

const Button = ({ text, iconName, action }) => {
    return (
        <TouchableOpacity onPress={action}>
            <View style={styles.button}>
                <Icon name={iconName} size={hp("7%")} color={Colors.main} />
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: "flex-start"
    },
    row: {
        flexDirection: "row",
        width: wp("100%"),
        paddingTop: hp("2%"),
        justifyContent: "space-evenly",
    },
    button: {
        height: hp("20%"),
        width: wp("40%"),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white
    },
    buttonText: {
        color: Colors.main,
        fontSize: hp("2.5%"),
    }
})

export default Utilities


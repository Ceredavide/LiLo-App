import React from "react"
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Screen from "../components/shared/Screen"

import Colors from "../constants/colors"

const Utilities = ({ navigation }) => {

    return (
        <Screen style={styles.screen}>
            <View style={styles.row}>
                <Button
                    text="Autogestite"
                    iconName="star"
                    action={() => navigation.navigate("Autogestite")}
                />
                <Button
                    text="Mappa"
                    iconName="map"
                    action={() => navigation.navigate("Mappa")}
                />
            </View>

            <View style={styles.row}>
                <Button
                    text="Risorse"
                    iconName="format-list-checkbox"
                    action={() => navigation.navigate("Autogestite")}
                />
                <Button
                    text="Lettore QR"
                    iconName="qrcode"
                    action={() => navigation.navigate("Mappa")}
                />
            </View>
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


import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { MaterialIcons as Icon } from '@expo/vector-icons'

const EditorButton = ({ navigation }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Form")} style={styles.button}>
            <Icon name="description" size={hp("3.7%")} color="#FFF" />
            <Text style={styles.text}>Controlla le proposte</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: wp("85%"),
        height: hp("8%"),
        marginTop: hp("3%"),
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "red",
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#4630EB"
    },
    text: {
        color: "#FFFF",
        fontSize: hp("2.7%"),
        fontFamily: "open-sans-regular",
    }
})

export default EditorButton
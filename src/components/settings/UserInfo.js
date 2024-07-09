import React from "react";
import { View, Text, StyleSheet } from "react-native"

import {
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import COLORS from "../../constants/COLORS"

const UserInfo = ({ user = {} }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hai effettuato l'accesso come</Text>
            <Text style={styles.text}>{user.nome || ""} {user.cognome || ""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp("2%"),
        alignItems: "center"
    },
    text: {
        fontSize: hp("2%"),
        fontFamily: "open-sans-regular",
        color: COLORS.white
    }
})

export default UserInfo
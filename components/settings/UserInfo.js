import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";

const UserInfo = () => {
    const user = useSelector(state => state.user)
    console.log(user)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hai effettuato l'accesso come</Text>
            <Text style={styles.text}>{user.nome} {user.cognome}, classe: {user.classe}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp("5%"),
        alignItems: "center"
    },
    text:{
        fontSize: hp("2%"),
        fontFamily: "open-sans-regular"
    }
})

export default UserInfo
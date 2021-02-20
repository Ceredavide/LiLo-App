import React from "react"
import { StyleSheet, Text } from "react-native"

import LottieView from 'lottie-react-native';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import Screen from "../../components/shared/Screen"
import Button from "../../components/shared/MyButton"

import Colors from "../../constants/colors"

const EmailConfirmation = ({ navigation }) => {

    return (
        <Screen>
            <Text style={styles.title}>Successo!</Text>
            <LottieView
                autoPlay
                loop={true}
                style={styles.lottie}
                source={require('../../assets/lottie/email.json')}
            />
            <Text style={styles.text}>Controlla la tua posta elettronica per attivare il tuo account.</Text>
            <Text style={styles.smallText}>(anche la posta indesiderata mi racc)</Text>
            <Button text="Ok" action={() => navigation.navigate("Welcome")} color={Colors.green} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    lottie: {
        height: hp("30%"),
        width: wp("60%")
    },
    title: {
        textAlign: "center",
        fontSize: hp("5%"),
        fontFamily: "open-sans-light",
        color: Colors.white,
        marginBottom: hp("5%")
    },
    text: {
        textAlign: "center",
        marginTop: hp("5%"),
        width: wp("75%"),
        fontSize: hp("2.3%"),
        fontFamily: "open-sans-light",
        color: Colors.white
    },
    smallText: {
        fontSize: hp("1.2%"),
        fontFamily: "open-sans-light",
        color: Colors.white,
        marginBottom: hp("5%")
    }
})

export default EmailConfirmation
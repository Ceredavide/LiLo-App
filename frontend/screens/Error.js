import React from "react"
import {
    StyleSheet,
    View,
    Text
} from "react-native";

import LottieView from 'lottie-react-native';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import Button from "../components/shared/MyButton"

import Colors from '../constants/colors'

const Error = ({ reload, text }) => {
    return (
        <View style={{ flex: 1 }}>
            <LottieView
                autoPlay
                loop={false}
                style={styles.lottie}
                source={require('../assets/lottie/error.json')}
            />
            <Text style={styles.text}>{text}</Text>
            <Button text="Riprova" action={reload} color="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    lottie: {
        width: hp('50%'),
        height: hp('50%')
    },
    text: {
        color: Colors.white,
        fontFamily: 'open-sans-regular',
        fontSize: hp('3.5%'),
        alignSelf: "center",
        textAlign: 'center',
        width: wp('80%'),
        marginBottom: hp('2%')
    }
})

export default Error
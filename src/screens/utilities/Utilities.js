import React from "react"
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Screen from "../../components/shared/Screen"
import TransitionView from "../../components/shared/TransitionView"

import COLORS from "../../constants/COLORS"

const Utilities = ({ navigation }) => {

    return (
        <Screen style={styles.screen} scrollable={true}>
            <TransitionView>
                <TransitionView index={0}>
                    <View style={styles.row}>
                        <Button
                            text="Autogestite"
                            action={() => navigation.navigate("Autogestite")}
                            image={require("../../../assets/images/illustrations/autogestite.jpg")}
                        />
                    </View>
                </TransitionView>
                <TransitionView index={1}>
                    <View style={styles.row}>
                        <Button
                            text="Risorse"
                            action={() => navigation.navigate("Risorse")}
                            image={require("../../../assets/images/illustrations/risorse.jpg")}
                        />
                    </View>
                </TransitionView>
                <TransitionView index={2}>
                    <View style={styles.row}>
                        <Button
                            text="Lettore QR"
                            action={() => navigation.navigate("Scanner")}
                            image={require("../../../assets/images/illustrations/qr.jpg")}
                        />
                    </View>
                </TransitionView>
            </TransitionView>
        </Screen>
    )

}

const Button = ({ text, action, image }) => {
    return (
        <TouchableOpacity onPress={action}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
                <Image source={image} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: "flex-start"
    },
    button: {
        marginTop: hp("1%"),
        marginBottom: hp("1.5%"),
        paddingHorizontal: wp("5%"),
        height: hp("17%"),
        flexDirection: "row",
        width: wp("90%"),
        borderRadius: 20,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFF"
    },
    buttonText: {
        color: COLORS.main,
        fontFamily: "open-sans-regular",
        fontSize: hp("4.2%"),
    },
    image: {
        width: wp("35%"),
        height: wp("25%")
    }
})

export default Utilities


import React from "react"
import { StyleSheet, SafeAreaView, StatusBar, View, Text, ImageBackground, Image } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Welcome = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <StatusBar barStyle="dark-content" />
            <ImageBackground source={require("../assets/images/wallpaper.png")} style={styles.screen}>
                <View style={styles.card}>
                    <Text style={styles.title}>LiLo App</Text>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/scuola.jpeg")}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        height: hp("45%"),
        width: wp("90%"),
        backgroundColor: "#002C85",
        // 002C85
        // EFC4BD
        borderRadius: 40,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    title: {
        paddingTop: hp("2%"),
        fontSize: hp("5.5%"),
        alignSelf: "center",
        color: "#FFF",
        fontFamily: "open-sans-regular"
    },
    image: {
        height: hp("10%"),
        width: wp("65%"),
        marginTop: hp("3%"),
        alignSelf: "center"
    },
})

export default Welcome
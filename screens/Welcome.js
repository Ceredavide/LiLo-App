import React from "react"
import { StyleSheet, SafeAreaView, StatusBar, View, Text, ImageBackground, Image } from "react-native"


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import IconButton from "../components/shared/IconButton"

import Colors from "../constants/colors"

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
            <StatusBar barStyle="dark-content" backgroundColor="white"/>
            <ImageBackground source={require("../assets/images/wallpaper.png")} style={styles.screen}>
                <View style={styles.card}>
                    <Text style={styles.title}>LiLo App</Text>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/scuola.jpeg")}
                    />
                    <View style={styles.containerButtons}>
                        <IconButton
                            action={() => navigation.navigate("Login")}
                            text="Login"
                            primaryColor={Colors.black}
                            backgroundColor={Colors.secondary}
                        />
                        <IconButton
                            action={() => navigation.navigate("SignUp")}
                            text="Registrati"
                            primaryColor={Colors.black}
                            backgroundColor={Colors.secondary}
                        />
                    </View>
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
        width: wp("85%"),
        backgroundColor: Colors.main,
        borderRadius: 40,
        shadowColor: Colors.white,
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
        color: Colors.secondary,
        fontFamily: "open-sans-bold"
    },
    image: {
        height: hp("10%"),
        width: wp("65%"),
        marginTop: hp("3%"),
        alignSelf: "center"
    },
    containerButtons: {
        paddingTop: hp("2%"),
        flex: 1,
        justifyContent: "space-evenly"
    }
})

export default Welcome
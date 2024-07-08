import React, {useContext, useEffect} from "react"
import { StyleSheet, SafeAreaView, StatusBar, View, Text, ImageBackground, Image, Alert } from "react-native"


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import IconButton from "../../components/shared/IconButton"

import COLORS from "../../constants/COLORS"
import * as SecureStore from "expo-secure-store";
import {AuthContext} from "../../Context";

const Welcome = ({ navigation }) => {

    const { setAuth } = useContext(AuthContext)

    useEffect(() => {
        Alert.alert(
            "Welcome to the Demo of LiLo App!",
            "This version is intended to present the main features of the app, there are no requests with backend services.",
        )
    }, [])

    const fakeLogin = async ()=> {
        const fakeUser = {
            user: {
              nome: "Davide",
              cognome: "Ceresa"
            },
            token: "123456789"
        }
        await SecureStore.setItemAsync("user", JSON.stringify(fakeUser))
        setAuth(fakeUser)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
            <StatusBar barStyle="dark-content" backgroundColor="white"/>
            <ImageBackground source={require("../../../assets/images/wallpaper.png")} style={styles.screen}>
                <View style={styles.card}>
                    <Text style={styles.title}>LiLo App</Text>
                    <Image
                        style={styles.image}
                        source={require("../../../assets/images/scuola.jpeg")}
                    />
                    <View style={styles.containerButtons}>
                        <IconButton
                            action={() => fakeLogin()}
                            text="Go to Home"
                            primaryColor={COLORS.black}
                            backgroundColor={COLORS.secondary}
                        />
                        <IconButton
                            action={() => navigation.navigate("Login")}
                            text="Login"
                            primaryColor={COLORS.black}
                            backgroundColor={COLORS.secondary}
                        />
                        <IconButton
                            action={() => navigation.navigate("SignUp")}
                            text="Registrati"
                            primaryColor={COLORS.black}
                            backgroundColor={COLORS.secondary}
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
        height: hp("50%"),
        width: wp("85%"),
        backgroundColor: COLORS.main,
        borderRadius: 40,
        shadowColor: COLORS.white,
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
        color: COLORS.secondary,
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
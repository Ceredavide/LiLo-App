import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, ImageBackground, Text, TouchableOpacity } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import TransitionView from "../components/shared/TransitionView"
import FloatingButton from "../components/shared/FloatingButton"
import Tag from "../components/comunicazione/Tag"

import Colors from "../constants/colors"

const Comunicazione = ({ route, navigation }) => {
    const { comunicazione } = route.params
    const { titolo, sottotitolo, paragrafo, immagine, tags } = comunicazione

    function renderTags(tags) {
        return tags.map((tag, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("ComunicazioniByTag", { tag })}>
                <Tag tag={tag} />
            </TouchableOpacity>
        ))
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.main }}>
            <ScrollView style={styles.container}>
                <TransitionView>
                    <ImageBackground style={styles.image} source={{ uri: immagine }} >
                        <FloatingButton
                            iconName="arrowleft"
                            action={navigation.goBack}
                            color={Colors.white}
                        />
                    </ImageBackground>
                </TransitionView>
                <View style={styles.containerText}>
                    <Text style={styles.title}>{titolo}</Text>
                    <Text style={styles.subtitle}>{sottotitolo}</Text>
                    <View style={styles.containerTags}>
                        {renderTags(tags)}
                    </View>
                    <Text style={styles.paragraph}>{paragrafo}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.main,
    },
    containerImage: {
        alignSelf: "center",
        width: wp("100%"),
        height: wp("100%"),
    },
    containerTags: {
        height: hp('4%'),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: hp("2%"),
    },
    image: {
        width: wp("100%"),
        height: wp("70%"),
        alignSelf: "center",
        borderRadius: 30
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: hp("4%"),
        color: Colors.white
    },
    subtitle: {
        fontFamily: "open-sans-regular",
        fontSize: hp("2.5%"),
        color: Colors.white
    },
    containerText: {
        paddingTop: hp("3%"),
        paddingBottom: hp("5%"),
        width: wp("85%"),
        alignSelf: "center",
    },
    paragraph: {
        fontFamily: "open-sans-regular",
        fontSize: hp("2.2%"),
        textAlign: "justify",
        color: Colors.white
    }
})

export default Comunicazione
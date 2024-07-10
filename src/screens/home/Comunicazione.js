import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, ImageBackground, Text, TouchableOpacity } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import TransitionView from "../../components/shared/TransitionView"
import FloatingButton from "../../components/shared/FloatingButton"
import Tag from "../../components/comunicazioni/Tag"

import COLORS from "../../constants/COLORS"

const Comunicazione = ({ route, navigation }) => {
    const { comunicazione } = route.params
    const { title, subtitle, paragraph, image, tags } = comunicazione

    function renderTags(tags) {
        return tags.map((tag, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("ComunicazioniByTag", { tag })}>
                <Tag tag={tag} style={styles.tag} textStyle={styles.tagText} />
            </TouchableOpacity>
        ))
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.main }}>
            <ScrollView style={styles.container}>
                <TransitionView>
                    <ImageBackground style={styles.image} source={{ uri: image }} >
                        <FloatingButton
                            iconName="arrowleft"
                            action={navigation.goBack}
                            color={COLORS.white}
                        />
                    </ImageBackground>
                </TransitionView>
                <View style={styles.containerText}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <View style={styles.containerTags}>
                        {renderTags(tags)}
                    </View>
                    <Text style={styles.paragraph}>{paragraph}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.main,
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
    tag: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: wp("2%"),
        height: hp("4%"),
        width: wp("40%"),
        borderRadius: 20
    },
    tagText: {
        fontSize: hp('2%'),
        marginLeft: wp("1%"),
        fontFamily: "open-sans-regular",
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
        color: COLORS.white
    },
    subtitle: {
        fontFamily: "open-sans-regular",
        fontSize: hp("2.5%"),
        color: COLORS.white
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
        color: COLORS.white
    }
})

export default Comunicazione
import React from "react"
import { StyleSheet, ScrollView, View } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Placeholder, PlaceholderLine, ShineOverlay } from "rn-placeholder"

import ImageHolder from "../home/ImageHolder"

const CardComunicazioniHolder = () => {
    return (
        <View style={styles.card}>
            <Placeholder
                Animation={ShineOverlay}
                Left={props => <ImageHolder />}
            >
                <PlaceholderLine style={{ marginTop: hp("1%") }} width={40} />
                <PlaceholderLine style={{ marginTop: hp("1%") }} width={75} />
                <PlaceholderLine width={75} />
            </Placeholder>
        </View>
    )
}


const ComunicazioniHolder = () => {
    const array = new Array(6).fill({})
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            {array.map((e, i) => { return <CardComunicazioniHolder key={i} /> })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        height: hp("13%"),
        width: wp("92%"),
        marginTop: hp("1.5%"),
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
})

export default ComunicazioniHolder
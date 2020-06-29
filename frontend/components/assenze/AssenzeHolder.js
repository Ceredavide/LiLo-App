import React from "react"
import { StyleSheet, View, SectionList } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Placeholder, PlaceholderLine, ShineOverlay } from "rn-placeholder"

const placeholder = Array(5).fill({
    title: 'Pritha',
    data: ['W', 'React Native'],
})

const HeaderAssenzeHolder = () => {
    return (
        <View style={{ flex: 1 }}>
            <Placeholder Animation={ShineOverlay}>
                <PlaceholderLine style={{ marginTop: hp("1%") }} width={45} />
            </Placeholder>
        </View>
    )
}

const CardAssenzaHolder = () => {
    return (
        <View style={{ flex: 1 }}>
            <Placeholder Animation={ShineOverlay}>
                <PlaceholderLine style={{ marginTop: hp("1%") }} width={45} />
                <PlaceholderLine style={{ marginTop: hp("1.5%") }} width={90} />
                <PlaceholderLine style={{ marginTop: hp("1%") }} width={90} />
            </Placeholder>
        </View>
    )
}

const AssenzeHolder = () => {
    return (
        <SectionList
            renderSectionHeader={({ section: { title } }) => <HeaderAssenzeHolder />}
            renderItem={({ item }) => <CardAssenzaHolder />}
            sections={placeholder}
            keyExtractor={(item, index) => item + index}
        />
    )
}

export default AssenzeHolder

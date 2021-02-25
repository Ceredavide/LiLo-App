import React from "react"
import { StyleSheet, SafeAreaView, ScrollView } from "react-native"

import COLORS from "../../constants/COLORS"

const Screen = ({ children, style, scrollable = false }) => {

    return (
        <SafeAreaView style={{ ...styles.screen, ...style }}>
            {scrollable ?
                <ScrollView showsVerticalScrollIndicator = {false}>
                    {children}
                </ScrollView> :
                children
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.main,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Screen
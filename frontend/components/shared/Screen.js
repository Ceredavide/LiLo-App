import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"

import Colors from "../../constants/colors"

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={{ ...styles.screen, ...style }}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.main,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Screen
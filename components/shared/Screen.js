import React from "react"
import { StyleSheet, View } from "react-native"

const Screen = ({ children, style }) => {
    return (
        <View style={{ ...styles.screen, ...style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F1F5F9",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Screen
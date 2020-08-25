import React from "react"
import { StyleSheet, View } from "react-native"

import Colors from "../../constants/colors"

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
        backgroundColor: Colors.main,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Screen
import React from "react"
import { StyleSheet, View, Text } from "react-native"

import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"

const IconWithText = ({ iconName, text, iconSize, fontSize, color = "black" }) => {
    return (
        <View style={styles.container}>
            <MaterialIcon name={iconName} color={color} size={iconSize} />
            <Text style={{ ...styles.text, fontSize: fontSize, color: color }}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 5,
        fontFamily: "open-sans-regular",
        color: "black",
        marginLeft: 3
    }
})

export default IconWithText
import React from "react"
import { StyleSheet, SafeAreaView, ScrollView } from "react-native"

import Colors from "../../constants/colors"

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
        backgroundColor: Colors.main,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Screen
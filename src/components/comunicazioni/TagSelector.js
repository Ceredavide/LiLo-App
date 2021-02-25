import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import COLORS from "../../constants/COLORS"

const TagSelector = ({ tags, selectedTag, setSelectedTag }) => {

    function handlePress(_id) {
        if (selectedTag === _id) {
            setSelectedTag(null)
        } else {
            setSelectedTag(_id)
        }
    }


    return (
        <View style={styles.container}>
            {tags.map(tag => {

                const { _id, nome, iconName, colore } = tag

                return (
                    <TouchableOpacity onPress={() => handlePress(_id)} key={_id}>
                        <View style={{ ...styles.tag, backgroundColor: selectedTag === _id ? colore : COLORS.white }}>
                            <Icon name={iconName} color={selectedTag === _id ? "#000" : COLORS.main} />
                            <Text style={{ ...styles.text, color: selectedTag === _id ? "#000" : COLORS.main }}>{nome}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: hp("5%")
    },
    tag: {
        borderRadius: 10,
        height: hp("7%"),
        minWidth: wp("20%"),
        marginRight: wp("3%"),
        justifyContent: "center",
        alignItems: "center"
    }
})

export default TagSelector 
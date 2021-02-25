import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { MaterialIcons as Icon } from '@expo/vector-icons'

import COLORS from "../../../constants/COLORS"

const TagSelector = ({ tags, setFieldValue, selectedTags }) => {

    function handlePress(_id) {
        if (selectedTags.includes(_id)) {
            setFieldValue("tags",
                [...selectedTags.filter(tagId => tagId !== _id)]
            )
        } else {
            setFieldValue("tags",
                [...selectedTags, _id]
            )
        }
    }

    return (
        <View style={styles.container}>
            {tags.map(tag => {

                const { _id, nome, iconName, colore } = tag

                const isSelected = selectedTags.includes(_id)

                return (
                    <TouchableOpacity onPress={() => handlePress(_id)} key={_id}>
                        <View style={{ ...styles.tag, backgroundColor: isSelected ? colore : COLORS.white }}>
                            <Icon name={iconName} color={isSelected ? "#000" : COLORS.main} />
                            <Text style={{ ...styles.text, color: isSelected ? "#000" : COLORS.main }}>{nome}</Text>
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
        marginHorizontal: wp("15%"),
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
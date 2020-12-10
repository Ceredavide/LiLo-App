import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'

import Colors from "../../../constants/colors"

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

            {/* creo nuovo array con tags cosi renderizza di nuovo */}
            {tags.map(tag => {

                const { _id, nome, iconName, colore } = tag

                return (
                    <TouchableOpacity onPress={() => handlePress(_id)} key={_id}>
                        <View style={{ ...styles.tag, backgroundColor: selectedTags.includes(_id) ? colore : "#FFFF" }}>
                            <Icon name={iconName} color={selectedTags.includes(_id) ? "#000" : Colors.main} />
                            <Text style={{ ...styles.text, color: selectedTags.includes(_id) ? "#000" : Colors.main }}>{nome}</Text>
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
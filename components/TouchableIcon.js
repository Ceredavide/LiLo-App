import React from "react"
import { TouchableOpacity } from "react-native"

import { AntDesign } from '@expo/vector-icons';

const TouchableIcon = ({ name, color, action }) => {
    return (
        <TouchableOpacity style={{ flex: 1, marginRight: 15 }} onPress={action}>
            <AntDesign name={name} size={32} color={color} />
        </TouchableOpacity>
    )
}


export default TouchableIcon
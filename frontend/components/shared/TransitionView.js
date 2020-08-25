import React from "react"
import { View } from "react-native"

import * as Animatable from 'react-native-animatable';

const TransitionView = props => {

    const { ...rest } = this.props

    return (
        <Animatable.View
            animation="fadeIn"
            duration={500}
            useNativeDriver
            {...rest}
        />
    )
}

export default TransitionView
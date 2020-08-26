import React from "react"

import * as Animatable from 'react-native-animatable';

const TransitionView = props => {

    const { index, ...rest } = props

    return (
        <Animatable.View
            animation="fadeIn"
            duration={500}
            delay={index ? (index * 500) / 5 : 0}
            useNativeDriver
            {...rest}
        />
    )
}

export default TransitionView
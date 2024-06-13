import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import AutogestiteStack from "./Autogestite"
import UtilitiesScreen from "../../screens/utilities/Utilities"
import RisorseScreen from "../../screens/utilities/Risorse"

import headerStyle from "../../styles/navigation/Header";

const { Navigator, Screen } = createStackNavigator()

const UtilitiesStack = () => {
    return (
        <Navigator screenOptions={headerStyle} headerMode="screen">
            <Screen name="Utilità" component={UtilitiesScreen} />
            <Screen name="Autogestite" component={AutogestiteStack} options={autogestiteOptions} />
            <Screen name="Risorse" component={RisorseScreen} />
        </Navigator>
    )
}

const autogestiteOptions = {
    headerShown: false
}

export default UtilitiesStack;
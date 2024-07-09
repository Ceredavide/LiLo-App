import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import AutogestiteStack from "./Autogestite"
import UtilitiesScreen from "../../screens/utilities/Utilities"
import RisorseScreen from "../../screens/utilities/Risorse"

const { Navigator, Screen } = createStackNavigator()

const UtilitiesStack = () => {
    return (
        <Navigator screenOptions={_screenOptions}>
            <Screen name="Utilità" component={UtilitiesScreen} />
            <Screen name="Autogestite" component={AutogestiteStack} />
            <Screen name="Risorse" component={RisorseScreen} />
        </Navigator>
    )
}

const _screenOptions = {
    headerShown: false
}

export default UtilitiesStack;
import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import AutogestiteStack from "./Autogestite"
import UtilitiesScreen from "../../screens/Utilities"
import RisorseScreen from "../../screens/Risorse"
import ScannerScreen from "../../screens/Scanner"

import headerStyle from "../../styles/navigation/Header";

const { Navigator, Screen } = createStackNavigator()

const UtilitiesStack = () => {
    return (
        <Navigator screenOptions={headerStyle}>
            <Screen name="Utilities" component={UtilitiesScreen} />
            <Screen name="Autogestite" component={AutogestiteStack} />
            <Screen name="Risorse" component={RisorseScreen} />
            <Screen name="Scanner" component={ScannerScreen} />
        </Navigator>
    )
}

const mappaOptions = {
    headerShown: false
}

export default UtilitiesStack;
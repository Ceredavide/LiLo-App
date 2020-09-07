import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import AutogestiteStack from "./Autogestite"
import UtilitiesScreen from "../../screens/Utilities"
import MappaScreen from '../../screens/Mappa'

import headerStyle from "../../styles/navigation/Header";

const { Navigator, Screen } = createStackNavigator()

const UtilitiesStack = () => {
    return (
        <Navigator screenOptions={headerStyle}>
            <Screen name="Utilities" component={UtilitiesScreen} />
            <Screen name="Mappa" component={MappaScreen} options={mappaOptions} />
            <Screen name="Autogestite" component={AutogestiteStack} />
        </Navigator>
    )
}

const mappaOptions = {
    headerShown: false
}

export default UtilitiesStack;
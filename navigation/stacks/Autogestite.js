import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import AutogestiteScreen from "../../screens/utilities/autogestite/Autogestite";

import headerstyle from "../../styles/navigation/Header";

const { Navigator, Screen } = createStackNavigator()

const AutogestiteStack = () => {
  return (
    <Navigator screenOptions={headerstyle}>
      <Screen name="Autogestite" component={AutogestiteScreen} />
    </Navigator>
  )
}

export default AutogestiteStack;

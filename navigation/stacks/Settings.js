import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../../screens/Settings";

import headerStyle from "../../styles/navigation/Header";

const { Navigator, Screen } = createStackNavigator()

const SettingsStack = () => {
  return (
    <Navigator screenOptions={headerStyle}>
      <Screen name="Impostazioni" component={SettingsScreen} />
    </Navigator>
  )
}

export default SettingsStack;

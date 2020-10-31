import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import AssenzeScreen from "../../screens/Assenze";

import headerStyle from "../../styles/navigation/Header";

const { Navigator, Screen } = createStackNavigator()

const AssenzeStack = () => {
  return (
    <Navigator screenOptions={headerStyle}>
      <Screen name="Assenze" component={AssenzeScreen} />
    </Navigator>
  )
}

export default AssenzeStack;

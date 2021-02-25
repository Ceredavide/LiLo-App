import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import AutogestiteScreen from "../../screens/utilities/autogestite/Autogestite";
import FormPropostaScreen from "../../screens/utilities/autogestite/FormProposta"
import ListProposteScreen from "../../screens/utilities/autogestite/ListProposte"

import headerstyle from "../../styles/navigation/Header";

const { Navigator, Screen } = createStackNavigator()

const customHeaderStyle = {
  ...headerstyle,
  headerTitleAlign: "center",
  headerTitleStyle: {
    ...headerstyle.headerTitleStyle,
    marginLeft: 0
  },
}

const AutogestiteStack = () => {
  return (
    <Navigator screenOptions={customHeaderStyle} headerMode="screen">
      <Screen name="Autogestite" component={AutogestiteScreen} />
      <Screen name="Form" component={FormPropostaScreen} />
      <Screen name="ListProposte" component={ListProposteScreen} />
    </Navigator>
  )
}

export default AutogestiteStack;

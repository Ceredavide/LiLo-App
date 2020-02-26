import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import AutogestiteScreen from "../../screens/Autogestite";
import PropostaScreen from "../../screens/Proposta";

import headerstyle from "../../styles/navigation/Header";

import TouchableIcon from "../../components/TouchableIcon"

const { Navigator, Screen } = createStackNavigator()

const AutogestiteStack = () => {
  return (
    <Navigator screenOptions={headerstyle}>
      <Screen name="Autogestite" component={AutogestiteScreen} options={autogestiteOptions} />
      <Screen name="Proposta" component={PropostaScreen} />
    </Navigator>
  )
}

const autogestiteOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableIcon
      style={{justifyContent: "center"}}
      action={() => navigation.navigate("Proposta")}
      color="white" name="pluscircleo"
    />)
})

export default AutogestiteStack;

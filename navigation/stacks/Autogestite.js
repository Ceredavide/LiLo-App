import React from "react"
import { createStackNavigator } from "react-navigation";

import AutogestiteScreen from "../../screens/Autogestite";
import PropostaScreen from "../../screens/Proposta";

import Headerstyle from "../../styles/navigation/Header";

import TouchableIcon from "../../components/TouchableIcon"

const AutogestiteStack = createStackNavigator(
  {
    Autogestite: AutogestiteScreen,
    Proposta: PropostaScreen
  },
  {
    defaultNavigationOptions: Headerstyle
  }
);

AutogestiteScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Autogestite",
    headerTitleStyle: {
      ...Headerstyle.headerTitleStyle,
      fontSize: 35,
    },
    headerRight: <TouchableIcon
      action={() => navigation.navigate("Proposta")}
      color="white" name="pluscircleo"
    />
  }
}

PropostaScreen.navigationOptions = {
  title: "Proposta",
  headerBackTitle: "Indietro",
  headerBackTitleStyle: {
    color: "white"
  }

};

AutogestiteStack.navigationOptions = {
  tabBarLabel: "Autogestite"
};

export default AutogestiteStack;

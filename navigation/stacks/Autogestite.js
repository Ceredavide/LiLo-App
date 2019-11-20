import { createStackNavigator } from "react-navigation";

import AutogestiteScreen from "../../screens/Autogestite";
import PropostaScreen from "../../screens/Proposta";

import Headerstyle from "../../styles/navigation/Header";

const AutogestiteStack = createStackNavigator(
  {
    Autogestite: AutogestiteScreen,
    Proposta: PropostaScreen
  },
  {
    mode: "modal",
    defaultNavigationOptions: Headerstyle
  }
);

AutogestiteScreen.navigationOptions = {
  title: "Autogestite"
};
PropostaScreen.navigationOptions = {
  title: "Proposta"
};

AutogestiteStack.navigationOptions = {
  tabBarLabel: "Autogestite"
};

export default AutogestiteStack;

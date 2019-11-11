import { createStackNavigator } from "react-navigation";

import AutogestiteScreen from "../../screens/Autogestite";
import PropostaScreen from "../../screens/Proposta";

const AutogestiteStack = createStackNavigator(
  {
    Autogestite: AutogestiteScreen,
    Proposta: PropostaScreen
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      header: null
    }
  }
);

AutogestiteStack.navigationOptions = {
  tabBarLabel: "Autogestite"
};

export default AutogestiteStack;

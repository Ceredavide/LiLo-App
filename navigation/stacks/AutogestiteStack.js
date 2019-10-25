import { createStackNavigator } from "react-navigation";

import AutogestiteScreen from "../../screens/AutogestiteScreen";
import PropostaScreen from "../../screens/PropostaScreen";

const AutogestiteStack = createStackNavigator(
  {
    Autogestite: AutogestiteScreen,
    Proposta: PropostaScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

AutogestiteStack.navigationOptions = {
  tabBarLabel: "Autogestite"
};

export default AutogestiteStack;

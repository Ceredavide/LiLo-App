import { createStackNavigator } from "react-navigation";

import AutogestiteScreen from "../../screens/AutogestiteScreen";

const AutogestiteStack = createStackNavigator(
  {
    Autogestite: AutogestiteScreen
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

import { createStackNavigator } from "react-navigation";

import AutogestiteScreen from "../../screens/AutogestiteScreen";

const AutogestiteStack = createStackNavigator({
    Autogestite: AutogestiteScreen
  });
  
  AutogestiteStack.navigationOptions = {
    tabBarLabel: "Autogestite"
  };

export default AutogestiteStack;

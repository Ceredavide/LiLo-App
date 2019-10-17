import { createStackNavigator } from "react-navigation";

import AutogestiteScreen from "../../screens/AutogestiteScreen";

const AutogestiteStack = createStackNavigator({
    Home: AutogestiteScreen
  });
  
  AutogestiteStack.navigationOptions = {
    tabBarLabel: "Autogestite"
  };

export default AutogestiteStack;

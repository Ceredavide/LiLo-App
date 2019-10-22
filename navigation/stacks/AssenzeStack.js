import { createStackNavigator } from "react-navigation";

import AssenzeScreen from "../../screens/AssenzeScreen";

const AssenzeStack = createStackNavigator(
  {
    Assenze: AssenzeScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

AssenzeStack.navigationOptions = {
  tabBarLabel: "Assenze"
};

export default AssenzeStack;

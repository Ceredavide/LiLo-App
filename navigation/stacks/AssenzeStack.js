import { createStackNavigator } from "react-navigation";

import AssenzeScreen from "../../screens/Assenze";

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

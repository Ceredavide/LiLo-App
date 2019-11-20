import { createStackNavigator } from "react-navigation";

import AssenzeScreen from "../../screens/Assenze";

import HeaderStyle from "../../styles/navigation/Header";

const AssenzeStack = createStackNavigator(
  {
    Assenze: AssenzeScreen
  },
  {
    defaultNavigationOptions: HeaderStyle
  }
);

AssenzeScreen.navigationOptions = {
  title: "Assenze"
};

AssenzeStack.navigationOptions = {
  tabBarLabel: "Assenze"
};

export default AssenzeStack;

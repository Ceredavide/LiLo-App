import { createStackNavigator } from "react-navigation";

import SettingsScreen from "../../screens/Settings";

import HeaderStyle from "../../styles/navigation/Header";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: HeaderStyle
  }
);

SettingsScreen.navigationOptions = {
  title: "Impostazioni"
};

SettingsStack.navigationOptions = {
  tabBarLabel: "Impostazioni"
};

export default SettingsStack;

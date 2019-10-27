import { createStackNavigator } from "react-navigation";

import SettingsScreen from "../../screens/SettingsScreen";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Impostazioni"
};

export default SettingsStack;

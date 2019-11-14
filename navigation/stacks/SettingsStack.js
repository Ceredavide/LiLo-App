import { createStackNavigator } from "react-navigation";

import SettingsScreen from "../../screens/Settings";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: {
      title: "Impostazioni",
      headerStyle: {
        backgroundColor: "#009fff",
        height: hp("8%"),
        borderBottomWidth: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontFamily: "open-sans-regular",
        fontWeight: "bold",
        fontSize: hp("5%")
      }
    }
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Impostazioni"
};

export default SettingsStack;

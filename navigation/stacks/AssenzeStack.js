import { createStackNavigator } from "react-navigation";

import AssenzeScreen from "../../screens/Assenze";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const AssenzeStack = createStackNavigator(
  {
    Assenze: AssenzeScreen
  },
  {
    defaultNavigationOptions: {
      title: "Assenze",
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

AssenzeStack.navigationOptions = {
  tabBarLabel: "Assenze"
};

export default AssenzeStack;

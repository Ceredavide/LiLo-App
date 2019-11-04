import { createStackNavigator } from "react-navigation";

import HomeScreen from "../../screens/HomeScreen";
import ComunicazioniScreen from "../../screens/ComunicazioniScreen";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Comunicazioni: ComunicazioniScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#009fff",
        height: hp("10%"),
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: hp("5%")
      }
    }
  }
);

HomeScreen.navigationOptions = {
  title: "Home"
}

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

export default HomeStack;

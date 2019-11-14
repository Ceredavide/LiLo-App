import { createStackNavigator } from "react-navigation";

import HomeScreen from "../../screens/Home";
import ComunicazioniScreen from "../../screens/Comunicazioni";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Comunicazioni: ComunicazioniScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#009fff",
        height: hp("8%"),
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

ComunicazioniScreen.navigationOptions = {
  title: "Comunicazioni"
}

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

export default HomeStack;

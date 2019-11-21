import { createStackNavigator } from "react-navigation";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import HomeScreen from "../../screens/Home";
import ComunicazioneScreen from "../../screens/Comunicazione";
import ComunicazioniScreen from "../../screens/Comunicazioni";

import HeaderStyle from "../../styles/navigation/Header";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Comunicazione: ComunicazioneScreen,
    Comunicazioni: ComunicazioniScreen
  },
  {
    mode: "modal",
    defaultNavigationOptions: HeaderStyle
  }
);

HomeScreen.navigationOptions = {
  title: "Home"
};

ComunicazioniScreen.navigationOptions = {
  title: "Comunicazioni",
  headerTitleStyle: {
    fontFamily: "playfair-regular",
    fontWeight: "bold",
    fontSize: hp("3%"),
    marginBottom: hp("1%")
  }
};

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

export default HomeStack;

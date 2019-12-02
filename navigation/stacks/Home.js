import { createStackNavigator } from "react-navigation";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import HomeScreen from "../../screens/Home";
import ComunicazioneScreen from "../../screens/Comunicazione";
import ComunicazioniScreen from "../../screens/Comunicazioni";
import NewComunicazioneScreen from "../../screens/NewComunicazione";

import HeaderStyle from "../../styles/navigation/Header";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Comunicazione: ComunicazioneScreen,
    Comunicazioni: ComunicazioniScreen,
    NewComunicazione: NewComunicazioneScreen
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
    fontFamily: "futura-bold",
    fontWeight: "bold",
    fontSize: hp("3%"),
    marginBottom: hp("1%")
  }
};

NewComunicazioneScreen.navigationOptions = {
  title: "Nuova Comunicazione",
  headerTitleStyle: {
    fontFamily: "futura-bold",
    fontWeight: "bold",
    fontSize: hp("3%"),
    marginBottom: hp("1%")
  }
};

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

export default HomeStack;

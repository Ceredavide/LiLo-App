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
    defaultNavigationOptions: HeaderStyle
  }
);

HomeScreen.navigationOptions = {
  title: "Home"
};

ComunicazioneScreen.navigationOptions = {
  title: "Comunicazione",
  headerTitleStyle: {
    fontFamily: "System",
    color: "white",
    fontSize: 28,
    marginBottom: hp("1%")
  },
  headerBackTitleStyle: {
    color: "white"
  }
}

ComunicazioniScreen.navigationOptions = {
  title: "Comunicazioni",
  headerTitleStyle: {
    fontFamily: "System",
    color: "white",
    fontSize: 28,
    marginBottom: hp("1%")
  }
};

NewComunicazioneScreen.navigationOptions = {
  title: "Nuova Comunicazione",
  headerTitleStyle: {
    fontFamily: "System",
    color: "white",
    fontSize: 18,
    marginBottom: hp("1%")
  }
};

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

export default HomeStack;

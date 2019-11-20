import { createStackNavigator } from "react-navigation";

import HomeScreen from "../../screens/Home";
import ComunicazioniScreen from "../../screens/Comunicazioni";

import HeaderStyle from "../../styles/navigation/Header"

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Comunicazioni: ComunicazioniScreen
  },
  {
    defaultNavigationOptions: HeaderStyle
  }
);

HomeScreen.navigationOptions = {
  title: "Home"
}

ComunicazioniScreen.navigationOptions = {
  title: "Comunicazioni"
}

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

export default HomeStack;

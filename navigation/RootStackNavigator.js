import { createAppContainer, createSwitchNavigator } from "react-navigation";

import TabNav from './MainTabNavigator'
import LoginScreen from '../screens/LoginScreen'
import LoadingScreen from '../screens/LoadingScreen'

const Screen = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Login: LoginScreen,
      Main: TabNav
    },
    {
      initialRouteName: "Loading"
    }
  )
);

export default Screen;

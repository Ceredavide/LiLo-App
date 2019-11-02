import { createAppContainer, createSwitchNavigator } from "react-navigation";

import TabNav from './TabNav'
import LoginScreen from '../screens/LoginScreen'
import AuthScreen from '../screens/AuthScreen'

const Screen = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthScreen,
      Login: LoginScreen,
      Main: TabNav
    },
    {
      initialRouteName: "Auth"
    }
  )
);

export default Screen;

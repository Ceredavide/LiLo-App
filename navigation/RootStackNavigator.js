import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../screens/Login";

const Screen = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "Login"
    }
  )
);

export default Screen;

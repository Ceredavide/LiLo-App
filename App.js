import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthStack from "./navigation/stacks/Auth";
import MainTabNavigator from "./navigation/MainTabNavigator";

import LoadingScreen from "./Loading";


export default App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      App: MainTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
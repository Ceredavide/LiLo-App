import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthStack from "./stacks/Auth";
import TabNavigator from "./TabNavigator";
import LoadingScreen from "../Loading";


export default MainNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      App: TabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
import React from "react";

import { createBottomTabNavigator } from "react-navigation";

import { MaterialIcons } from "@expo/vector-icons";

import HomeStack from "../navigation/stacks/HomeStack";
import AssenzeStack from "../navigation/stacks/AssenzeStack";
import AutogestiteStack from "../navigation/stacks/AutogestiteStack";
import SettingsStack from "../navigation/stacks/SettingsStack";

const TabNav = createBottomTabNavigator(
  {
    Home: HomeStack,
    Assenze: AssenzeStack,
    Autogestite: AutogestiteStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        let iconName;
        switch (navigation.state.routeName) {
          case "Home": {
            iconName = "home";
            break;
          }
          case "Assenze": {
            iconName = "people";
            break;
          }
          case "Autogestite": {
            iconName = "casino";
            break;
          }
          case "Settings": {
            iconName = "settings";
            break;
          }
        }
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#5ea6e5",
      inactiveTintColor: "gray"
    }
  }
);

export default TabNav;

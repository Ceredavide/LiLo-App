import React from "react";

import { createBottomTabNavigator } from "react-navigation";

import { MaterialIcons } from "@expo/vector-icons";

import HomeStack from "./stacks/HomeStack";
import AssenzeStack from "./stacks/AssenzeStack";
import AutogestiteStack from "./stacks/AutogestiteStack";
import SettingsStack from "./stacks/SettingsStack";

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
        return <MaterialIcons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#009fff",
      inactiveTintColor: "gray",
      showLabel: false
    }
  }
);

export default TabNav;

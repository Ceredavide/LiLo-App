import React from "react";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import { MaterialIcons } from "@expo/vector-icons";

import HomeStack from "./stacks/Home";
import AssenzeStack from "./stacks/Assenze";
import AutogestiteStack from "./stacks/Autogestite";
import SettingsStack from "./stacks/Settings";

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
const MainTabNavigator = createAppContainer(TabNav);

export default MainTabNavigator;

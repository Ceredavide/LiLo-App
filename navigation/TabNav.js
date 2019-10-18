import React from "react";

import { createBottomTabNavigator } from "react-navigation";

import { MaterialIcons } from '@expo/vector-icons';

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
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Assenze") {
          iconName = "people";
        } else if (routeName === "Autogestite") {
          iconName = "casino";
        } else if (routeName === "Settings") {
          iconName = "settings";
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

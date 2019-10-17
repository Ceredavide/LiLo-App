import React from "react";

import { createBottomTabNavigator } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

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
        } else if (routeName === "Web") {
          iconName = "collections";
        } else if (routeName === "Settings") {
          iconName = "settings";
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#5ea6e5",
      inactiveTintColor: "gray"
    }
  }
);

export default TabNav;

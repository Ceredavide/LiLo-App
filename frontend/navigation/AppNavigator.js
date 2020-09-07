import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from "@expo/vector-icons";

import HomeStack from "./stacks/Home";
import AssenzeStack from "./stacks/Assenze"
import UtilitiesStack from "./stacks/Utilities";
import SettingsStack from "./stacks/Settings"

import Colors from "../constants/colors"

const { Navigator, Screen } = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions} tabBarOptions={_tabBarOptions}>
      <Screen name="Home" component={HomeStack} />
      <Screen name="Assenze" component={AssenzeStack} />
      <Screen name="Utilities" component={UtilitiesStack} />
      <Screen name="Impostazioni" component={SettingsStack} />
    </Navigator>
  )
}

const _tabBarOptions = {
  style: {
    backgroundColor: Colors.main,
    borderTopColor: "transparent"
  },
  activeTintColor: Colors.secondary,
  inactiveTintColor: "#FFFF",
}

const _screenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName;

    switch (route.name) {
      case "Home": {
        iconName = "home";
        break;
      }
      case "Assenze": {
        iconName = "people";
        break;
      }
      case "Utilities": {
        iconName = "dashboard";
        break;
      }
      case "Impostazioni": {
        iconName = "settings";
        break;
      }
    }
    return <MaterialIcons name={iconName} size={30} color={color} />;
  },
})

export default AppNavigator;

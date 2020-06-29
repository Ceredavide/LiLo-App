import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from "@expo/vector-icons";

import HomeStack from "./stacks/Home";
import AssenzeStack from "./stacks/Assenze"
import AutogestiteStack from "./stacks/Autogestite";
import SettingsStack from "./stacks/Settings"

const { Navigator, Screen } = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions} tabBarOptions={_tabBarOptions}>
      <Screen name="Home" component={HomeStack} />
      <Screen name="Assenze" component={AssenzeStack}/>
      <Screen name="Autogestite" component={AutogestiteStack} />
      <Screen name="Impostazioni" component={SettingsStack} />
    </Navigator>
  )
}

const _tabBarOptions = {
  activeTintColor: "#009fff",
  inactiveTintColor: "gray",
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
      case "Autogestite": {
        iconName = "casino";
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

export default TabNavigator;

import React from "react";
import { StatusBar } from "react-native"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { MaterialIcons } from "@expo/vector-icons";

import HomeStack from "./stacks/Home";
import AssenzeStack from "./stacks/Assenze"
import UtilitiesStack from "./stacks/Utilities";
import SettingsStack from "./stacks/Settings"

import Colors from "../constants/colors"

const { Navigator, Screen } = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
      <Navigator screenOptions={_screenOptions} tabBarOptions={_tabBarOptions}>
        <Screen name="Home" component={HomeStack} />
        <Screen name="Assenze" component={AssenzeStack} />
        <Screen name="Utilità" component={UtilitiesStack} />
        <Screen name="Impostazioni" component={SettingsStack} />
      </Navigator>
    </>
  )
}

const _tabBarOptions = {
  style: {
    backgroundColor: Colors.secondary,
  },
  activeTintColor: Colors.black,
  inactiveTintColor: Colors.fourth,
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
      case "Utilità": {
        iconName = "dashboard";
        break;
      }
      case "Impostazioni": {
        iconName = "settings";
        break;
      }
    }
    return <MaterialIcons name={iconName} size={hp("3%")} color={color} />;
  },
})

export default AppNavigator;

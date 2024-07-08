import React from "react";
import { StatusBar } from "react-native"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { MaterialIcons } from "@expo/vector-icons";

import HomeStack from "./stacks/Home";
import UtilitiesStack from "./stacks/Utilities";

import COLORS from "../constants/COLORS"
import headerStyle from "../styles/navigation/Header";
import AssenzeScreen from "../screens/Assenze";
import SettingsScreen from "../screens/Settings";

const { Navigator, Screen } = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.main} barStyle="light-content" />
      <Navigator screenOptions={_screenOptions} initialRouteName={"Comunicazioni"}>
        <Screen name="Comunicazioni" component={HomeStack} options={{headerShown: false}} />
        <Screen name="Assenze" options={headerStyle} component={AssenzeScreen}/>
        <Screen name="Utilities" component={UtilitiesStack} />
        <Screen name="Impostazioni" options={headerStyle} component={SettingsScreen} />
      </Navigator>
    </>
  )
}

const _screenOptions = ({ route }) => ({
  ...headerStyle,
  style: {
    backgroundColor: COLORS.secondary,
  },
  activeTintColor: COLORS.black,
  inactiveTintColor: COLORS.fourth,
  tabBarIcon: ({ color }) => {
    let iconName;
    switch (route.name) {
      case "Comunicazioni": {
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
    return <MaterialIcons name={iconName} size={hp("3%")} color={color} />;
  },
})

export default AppNavigator;

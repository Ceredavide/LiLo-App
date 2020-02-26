import React from "react"

import { createStackNavigator } from "@react-navigation/stack";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import HomeScreen from "../../screens/Home";
import ComunicazioneScreen from "../../screens/Comunicazione";
import ComunicazioniScreen from "../../screens/Comunicazioni";
import NewComunicazioneScreen from "../../screens/NewComunicazione";

import headerStyle from "../../styles/navigation/Header";

const { Navigator, Screen } = createStackNavigator()

const HomeStack = () => {
  return (
    <Navigator screenOptions={headerStyle}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Comunicazione" component={ComunicazioneScreen} options={comunicazioniOptions} />
      <Screen name="Comunicazioni" component={ComunicazioniScreen} options={comunicazioniOptions} />
      <Screen name="Nuova Comunicazione" component={NewComunicazioneScreen} options={newComunicazioneOptions} />
    </Navigator>
  )
}

const comunicazioniOptions = {
  headerTitleStyle: {
    fontSize: hp("3.7%"),
  }
}

const newComunicazioneOptions = {
  headerTitleStyle: {
    fontSize: hp("2.7%")
  }
}

export default HomeStack;

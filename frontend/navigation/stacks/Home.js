import React from "react"

import { createStackNavigator } from "@react-navigation/stack";

import {
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import HomeScreen from "../../screens/Home";
import ComunicazioneScreen from "../../screens/Comunicazione";
import ComunicazioniByTagScreen from '../../screens/ComunicazioniByTag'
import ComunicazioniScreen from "../../screens/Comunicazioni";
import NewComunicazioneScreen from "../../screens/NewComunicazione";

import headerStyle from "../../styles/navigation/Header";

import { ComunicazioniContext } from "../../Context"

const { Navigator, Screen } = createStackNavigator()

const HomeStack = () => {
  return (
    <ComunicazioniContext.Provider value="bella">
      <Navigator screenOptions={headerStyle}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Comunicazione" component={ComunicazioneScreen} options={comunicazioneOptions} />
        <Screen name="ComunicazioniByTag" component={ComunicazioniByTagScreen} options={comunicazioneOptions} />
        <Screen name="Comunicazioni" component={ComunicazioniScreen} options={comunicazioniOptions} />
        <Screen name="Nuova Comunicazione" component={NewComunicazioneScreen} options={newComunicazioneOptions} />
      </Navigator>
    </ComunicazioniContext.Provider>
  )
}

const comunicazioneOptions = {
  headerShown: false
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

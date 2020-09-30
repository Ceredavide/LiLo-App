import React, { useContext } from "react"
import { StyleSheet } from "react-native"

import { createStackNavigator } from "@react-navigation/stack";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import HomeScreen from "../../screens/Home";
import ComunicazioneScreen from "../../screens/Comunicazione";
import ComunicazioniByTagScreen from '../../screens/ComunicazioniByTag'
import ComunicazioniScreen from "../../screens/Comunicazioni";
import NewComunicazioneScreen from "../../screens/NewComunicazione";

import TouchableIcon from "../../components/shared/TouchableIcon"

import headerStyle from "../../styles/navigation/Header";

import { AuthContext, ComunicazioniContext } from "../../Context"

const { Navigator, Screen } = createStackNavigator()

import Colors from "../../constants/colors"

const HomeStack = () => {

  const { auth } = useContext(AuthContext)

  function renderHeaderButton({ navigation }, user) {
    if (user.role === "administrator" || "editor") {
      return {
        headerRight: () => (
          <TouchableIcon
            name="edit"
            action={() => navigation.navigate("EditComunicazioni")}
            style={styles.headerButton}
            color={Colors.white}
          />
        )
      }
    } else return {}
  }

  return (
    <ComunicazioniContext.Provider value="bella">
      <Navigator screenOptions={headerStyle} headerMode="screen">
        <Screen name="Home" component={HomeScreen} options={props => renderHeaderButton(props, auth.user)} />
        <Screen name="Comunicazione" component={ComunicazioneScreen} options={comunicazioneOptions} />
        <Screen name="ComunicazioniByTag" component={ComunicazioniByTagScreen} options={comunicazioneOptions} />
        <Screen name="EditComunicazioni" component={ComunicazioniScreen} options={comunicazioniOptions} />
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

const styles = StyleSheet.create({
  headerButton: {
    marginTop: hp("3.9%"),
    marginRight: wp("8%")
  }
})

export default HomeStack

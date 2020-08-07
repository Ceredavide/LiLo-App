import React from "react";
import { StyleSheet, View, Image, Linking } from "react-native";
import { useDispatch, useSelector } from "react-redux"

import * as SecureStore from 'expo-secure-store';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Chip } from "react-native-paper";

import Screen from "../components/shared/Screen"
import MyButton from "../components/shared/MyButton";
import UserInfo from "../components/settings/UserInfo"

const SettingsScreen = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleLogout = async () => {
    dispatch({ type: "DELETE_USER_CREDENTIALS" })
    await SecureStore.deleteItemAsync("user")
  };

  const handleTermini = () => {
    Linking.openURL(
      "http://liloautogestito.ch/API/files/termini_e_condizioni.html"
    );
  };

  return (
    <Screen style={styles.screen}>
      <Image
        style={styles.image}
        source={require("../assets/images/student-hat.png")}
      />
      <Chip
        style={{ marginTop: 10 }}
        icon="error"
        onPress={() => Linking.openURL("mailto:ceredavide@live.it")}
      >
        contatto in caso di problemi
        </Chip>
      <UserInfo user={user}/>
      <View style={styles.bottoniContainer}>
        <MyButton
          action={handleTermini}
          text="Termini e condizioni"
          color="#1ed15a"
        />
        <MyButton
          action={handleLogout}
          text="Logout"
          color="#e65054"
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: wp("70%"),
    height: wp("70%"),
    borderRadius: 20
  },
  bottoniContainer: {
    marginBottom: hp("5%")
  },
});

export default SettingsScreen;

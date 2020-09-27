import React, { useContext } from "react";
import { StyleSheet, View, Image, Linking } from "react-native";

import * as SecureStore from 'expo-secure-store';
import { AuthContext } from "../Context"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Chip } from "react-native-paper";

import Screen from "../components/shared/Screen"
import MyButton from "../components/shared/MyButton";
import UserInfo from "../components/settings/UserInfo"

const SettingsScreen = () => {
  const { auth, setAuth } = useContext(AuthContext)

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("user")
    setAuth({})
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
      <UserInfo user={auth.user} />
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

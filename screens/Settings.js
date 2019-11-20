import React from "react";

import { StyleSheet, View, Image, AsyncStorage, Linking } from "react-native";

import * as firebase from "firebase";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Chip } from "react-native-paper";

import MyButton from "../components/MyButton";

const SettingsScreen = () => {
  handleLogout = async () => {
    await AsyncStorage.clear().then(() => firebase.auth().signOut());
  };

  handleTermini = () => {
    Linking.openURL(
      "http://liloautogestito.ch/API/files/termini_e_condizioni.html"
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={require("../assets/images/logo.png")}
          />
        </View>
        <Chip
          icon="error"
          onPress={() => Linking.openURL("mailto:root@liloautogestito.ch")}
        >
          root@liloautogestito.ch
        </Chip>
        <View style={styles.bottoniContainer}>
          <MyButton
            action={handleTermini}
            text="Termini e condizioni"
            color="#1ed15a"
          />
          <MyButton
            action={() => handleLogout()}
            text="Logout"
            color="#e65054"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  cardContainer: {
    flex: 1,
    padding: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    backgroundColor: "#F1F5F9"
  },
  image: {
    width: wp("70%"),
    height: wp("70%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  containerImage: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: wp("3%"),
    marginTop: hp("3%"),
    marginBottom: hp("5%")
  },
  containerSettings: {
    flex: 1,
    alignItems: "center",
    margin: 5
  },
  bottoniContainer: {
    marginBottom: hp("5%")
  },
  email: {
    textAlign: "center",
    marginLeft: wp("13%"),
    fontSize: hp("2%")
  }
});

export default SettingsScreen;

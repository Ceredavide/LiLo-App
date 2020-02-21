import React from "react";
import { StyleSheet, View, Image, AsyncStorage, Linking } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Chip } from "react-native-paper";

import MyButton from "../components/MyButton";
import UserInfo from "../components/settings/UserInfo"

const SettingsScreen = ({ navigation }) => {

  handleLogout = async () => {
    await AsyncStorage.removeItem("user")
    navigation.navigate("Auth")
  };

  handleTermini = () => {
    Linking.openURL(
      "http://liloautogestito.ch/API/files/termini_e_condizioni.html"
    );
  };

  return (
    <View style={styles.container}>
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
      <UserInfo />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: hp("4%"),
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F1F5F9"
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

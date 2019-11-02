import React, { useEffect } from "react";
import { ImageBackground, AsyncStorage } from "react-native";

const AuthScreen = ({ navigation }) => {
  useEffect(() => {
    isUserLoggedIn();
  }, []);

  isUserLoggedIn = async () => {
    const userToken = await AsyncStorage.getItem("res");
    navigation.navigate(userToken !== null ? "Main" : "Login");
  };

  return (
    <ImageBackground
      source={require("../assets/images/splash.png")}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AuthScreen;

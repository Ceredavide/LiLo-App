import React, { useState } from "react";
import { AsyncStorage, Alert } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

const LoadingScreen = ({ navigation }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const loadResourcesAsync = async () => {
    const user = await AsyncStorage.getItem("user")
    if (user !== null) {
      setIsAuthenticated(true)
    }
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/icon.png"),
        require("./assets/images/logo.png"),
        require("./assets/images/scuola.jpeg"),
        require("./assets/images/login_successfull.jpg"),
        require("./assets/images/student-hat.png")
      ]),
      Font.loadAsync({
        "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
        "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        "robot-bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "futura-medium": require("./assets/fonts/Futura-medium.ttf"),
        "futura-bold": require("./assets/fonts/Futura-Bold.ttf"),
        "futura-book": require("./assets/fonts/Futura-Book.ttf")
      })
    ]);
  };

  const handleLoadingError = error => {
    console.log(error),
      Alert.alert("Qualcosa è andato storto, faresti meglio a riavviare l'app");
  };

  const handleFinishLoading = () => {
    navigation.navigate(isAuthenticated ? "App" : "Auth")
  };

  return (
    <AppLoading
      startAsync={loadResourcesAsync}
      onError={handleLoadingError}
      onFinish={handleFinishLoading}
    />
  );
};

export default LoadingScreen;

import React from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

const LoadingScreen = ({ handleEnd }) => {
  loadResourcesAsync = async () => {
    console.log("comincio il caricamento");
    return Promise.all([
      Asset.loadAsync([
        require("../assets/images/icon.png"),
        require("../assets/images/logo.png"),
        require("../assets/images/scuola.jpeg")
      ]),
      console.log("asset caricati"),
      Font.loadAsync({
        "open-sans-light": require("../assets/fonts/OpenSans-Light.ttf")
      }),
      console.log("font caricato")
    ]);
  };

  handleLoadingError = error => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    handleEnd();
    console.log("finito");
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

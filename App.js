import React from "react";
import { AsyncStorage, ImageBackground } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import TabNav from "./navigation/TabNav";

import LoginScreen from "./screens/loginPage/loginScreen";

export default class App extends React.Component {
  render() {
    return <Screen />;
  }
}

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("res");
    this.props.navigation.navigate(userToken !== null ? "Main" : "Login");
  };

  render() {
    return (
      <ImageBackground
        source={require("./assets/images/splash.png")}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

const Screen = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthLoadingScreen,
      Login: LoginScreen,
      Main: TabNav
    },
    {
      initialRouteName: "Auth"
    }
  )
);

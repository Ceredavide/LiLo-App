import React from "react";
import { AsyncStorage, ImageBackground } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import TabNav from "./navigation/TabNav";
import LoginScreen from "./screens/LoginScreen";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Screen />
      </Provider>
    );
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

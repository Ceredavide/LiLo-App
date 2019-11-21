import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";

import * as firebase from "firebase";

import LoginStack from "./navigation/stacks/Login";
import MainTabNavigator from "./navigation/MainTabNavigator";

import LoadingScreen from "./screens/Loading";

import firebaseConfig from "./data/firebase";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false
    };

    // Inizializza firebase...
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
  };

  handleEnd = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const {
      isAuthenticated,
      isAuthenticationReady,
      isLoadingComplete
    } = this.state;

    const { skipLoadingScreen } = this.props;

    if ((!isLoadingComplete || !isAuthenticationReady) && !skipLoadingScreen) {
      return <LoadingScreen handleEnd={this.handleEnd} />;
    } else {
      return (
        <Provider store={store}>
          <StatusBar backgroundColor="#009fff" barStyle="light-content" />
          {isAuthenticated ? <MainTabNavigator /> : <LoginStack />}
        </Provider>
      );
    }
  }
}

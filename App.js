import React from "react";
import { AsyncStorage, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";

import * as firebase from "firebase";

import LoginStack from "./navigation/stacks/Login";
import MainTabNavigator from "./navigation/MainTabNavigator";

import LoadingScreen from "./screens/Loading";

import firebaseConfig from "./data/firebase"
import { Studenti } from "./data/studenti";

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

  onAuthStateChanged = async user => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
    const studenteIndex = Studenti.findIndex(
      studente => studente.email === user.email
    );
    await AsyncStorage.setItem("Id", studenteIndex.toString());
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

    {
      if (
        (!isLoadingComplete || !isAuthenticationReady) &&
        !skipLoadingScreen
      ) {
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
}

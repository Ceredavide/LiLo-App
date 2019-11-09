import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import * as firebase from "firebase";

import RootStackNavigator from "./navigation/RootStackNavigator";
import MainTabNavigator from "./navigation/MainTabNavigator";

import LoadingScreen from "./screens/Loading";

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
      firebase.initializeApp(this.firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
  };

  firebaseConfig = {
    apiKey: "AIzaSyAQZBcKGLp16ql7RJLdMw02DnVdMg4KLrY",
    authDomain: "lilo-back-end.firebaseapp.com",
    databaseURL: "https://lilo-back-end.firebaseio.com",
    projectId: "lilo-back-end",
    storageBucket: "lilo-back-end.appspot.com",
    messagingSenderId: "817716562877",
    appId: "1:817716562877:web:3d8c0dec82770e484260d4",
    measurementId: "G-8QDQT7ZFVH"
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
        return (
          <LoadingScreen handleEnd={this.handleEnd} />
        );
      } else {
        return (
          <Provider store={store}>
            {isAuthenticated ? <MainTabNavigator /> : <RootStackNavigator />}
          </Provider>
        );
      }
    }
  }
}

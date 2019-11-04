import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import * as Font from "expo-font";

import Screen from "./navigation/Screen";
import rootReducer from "./store/rootReducer";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Screen />
      </Provider>
    );
  }
}

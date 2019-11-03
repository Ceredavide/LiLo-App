import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import proposteReducer from "./store/reducers/proposte";
import comunicazioniReducer from "./store/reducers/comunicazioni"

import Screen from "./navigation/Screen";

const rootReducer = combineReducers({
  proposte: proposteReducer,
  comunicazioni: comunicazioniReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};

export default App;

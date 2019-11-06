import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import proposteReducer from "./reducers/proposte";
import comunicazioniReducer from "./reducers/comunicazioni";

const rootReducer = combineReducers({
  proposte: proposteReducer,
  comunicazioni: comunicazioniReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

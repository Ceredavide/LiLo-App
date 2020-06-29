import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import userReducer from "./reducers/user";
import proposteReducer from "./reducers/proposte";
import comunicazioniReducer from "./reducers/comunicazioni";

const rootReducer = combineReducers({
  user: userReducer,
  proposte: proposteReducer,
  comunicazioni: comunicazioniReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
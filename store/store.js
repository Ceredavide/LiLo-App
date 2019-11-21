import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import userReducer from "./reducers/user";
import proposteReducer from "./reducers/proposte";
import comunicazioniReducer from "./reducers/comunicazioni";
import assenzeReducer from "./reducers/assenze";

const rootReducer = combineReducers({
  user: userReducer,
  proposte: proposteReducer,
  comunicazioni: comunicazioniReducer,
  assenze: assenzeReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;

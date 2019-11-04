import { combineReducers } from "redux";

import proposteReducer from "../store/reducers/proposte";
import comunicazioniReducer from "../store/reducers/comunicazioni"

const rootReducer = combineReducers({
  proposte: proposteReducer,
  comunicazioni: comunicazioniReducer
});

export default rootReducer;

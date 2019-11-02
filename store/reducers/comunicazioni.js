import {
  ADD_COMUNICAZIONE,
  FETCH_COMUNICAZIONI
} from "../actions/comunicazioni";

const initialState = {
  comunicazioni: []
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMUNICAZIONI:
      return {
        ...state,
        comunicazioni: [...comunicazioni, comunicazione]
      };
    case ADD_COMUNICAZIONE:
      return {
        ...state,
        comunicazioni: state.comunicazioni.push(comunicazioneData)
      };
    default:
      return state;
  }
};

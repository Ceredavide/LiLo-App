import {
  ADD_COMUNICAZIONE,
  RELOAD_COMUNICAZIONI,
  FETCH_COMUNICAZIONI
} from "../actions/comunicazioni";

const initialState = {
  comunicazioni: []
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMUNICAZIONI:
      const newArray = [...state.comunicazioni, action.comunicazioniData]
      return {
        ...state,
        comunicazioni: newArray
      };
    case RELOAD_COMUNICAZIONI:
      return {
        ...state,
        comunicazioni: action.comunicazioniData
      }
    case ADD_COMUNICAZIONE:
      return {
        ...state,
        comunicazioni: state.comunicazioni.push(comunicazioneData)
      };
    default:
      return state;
  }
};

export default comunicazioniReducer;
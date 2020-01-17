import * as actionTypes from "../actionTypes"

const initialState = {
  comunicazioni: [],
  isLoadingPost: false
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMUNICAZIONI_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_COMUNICAZIONI_SUCCESS:
      console.log(action.comunicazioni)
      return {
        ...state,
        comunicazioni: action.comunicazioni
      };
    case actionTypes.FETCH_COMUNICAZIONI_ERROR:
      return {
        ...state,
      };
    case actionTypes.POST_COMUNICAZIONE_START:
      return {
        ...state,
        isLoadingPost: true
      };
    case actionTypes.POST_COMUNICAZIONE_SUCCESS:
      return {
        ...state,
        comunicazioni: [...state.comunicazioni, action.comunicazione],
        isLoadingPost: false
      };
    case actionTypes.POST_COMUNICAZIONE_ERROR:
      return {
        ...state,
        isLoadingPost: false
      };
    case actionTypes.REMOVE_ONE_COMUNICAZIONE:
      const newComunicazioni = state.comunicazioni.filter(item => item._id !== action.id)
      return {
        ...state,
        comunicazioni: newComunicazioni
      };
    default:
      return state;
  }
};

export default comunicazioniReducer;
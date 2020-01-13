const initialState = {
  comunicazioni: []
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMUNICAZIONI_START":
      return {
        ...state,
      };
    case "FETCH_COMUNICAZIONI_SUCCESS":
      return {
        ...state,
        comunicazioni: action.comunicazioni
      };
    case "FETCH_COMUNICAZIONI_ERROR":
      return {
        ...state,
      };
    case "POST_COMUNICAZIONE_START":
      return {
        ...state,
      };
    case "POST_COMUNICAZIONE_SUCCESS":
      return {
        ...state,
      };
    case "POST_COMUNICAZIONE_ERROR":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default comunicazioniReducer;
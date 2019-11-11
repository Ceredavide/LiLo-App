const initialState = {
  comunicazioni: []
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMUNICAZIONI_SUCCESS":
      return {
        ...state,
        comunicazioni: action.comunicazioniData
      };
    case "FETCH_COMUNICAZIONI_ERROR":
      return {
        ...state,
        comunicazioni: "error"
      };
    default:
      return state;
  }
};

export default comunicazioniReducer;

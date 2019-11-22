const initialState = {
  loading: false,
  comunicazioni: []
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMUNICAZIONI_START":
      return {
        ...state,
        loading: true
      };
    case "FETCH_COMUNICAZIONI_SUCCESS":
      return {
        ...state,
        loading: false,
        comunicazioni: action.comunicazioniData
      };
    case "FETCH_COMUNICAZIONI_ERROR":
      return {
        ...state,
        loading: false,
        comunicazioni: "error"
      };
    default:
      return state;
  }
};

export default comunicazioniReducer;

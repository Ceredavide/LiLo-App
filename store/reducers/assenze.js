const initialState = {
  assenze: []
};

const assenzeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ASSENZE_SUCCESS":
      if (action.assenzeData.toString() === "") {
        return {
          ...state,
          assenze: ""
        };
      } else {
        return {
          ...state,
          assenze: action.assenzeData
        };
      }
    case "FETCH_ASSENZE_ERROR":
      return {
        ...state,
        comunicazioni: "error"
      };
    default:
      return state;
  }
};

export default assenzeReducer;

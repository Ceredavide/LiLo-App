const initialState = {
  loading: false,
  assenze: []
};

const assenzeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ASSENZE_START":
      return {
        ...state,
        loading: true
      };
    case "FETCH_ASSENZE_SUCCESS":
      if (action.assenzeData.toString() === "") {
        return {
          ...state,
          loading: false,
          assenze: ""
        };
      } else {
        return {
          ...state,
          loading: false,
          assenze: action.assenzeData
        };
      }
    case "FETCH_ASSENZE_ERROR":
      return {
        ...state,
        loading: false,
        comunicazioni: "error"
      };
    default:
      return state;
  }
};

export default assenzeReducer;

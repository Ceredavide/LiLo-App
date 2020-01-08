import * as actionTypes from "../actionTypes"

const initialState = {
  isLoading: false,
  assenze: []
};

const assenzeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ASSENZE_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_ASSENZE_SUCCESS:
      if (action.assenzeData.toString() === "") {
        return {
          ...state,
          isLoading: false,
          assenze: ""
        };
      } else {
        return {
          ...state,
          isLoading: false,
          assenze: action.assenzeData
        };
      }
    case actionTypes.FETCH_ASSENZE_ERROR:
      return {
        ...state,
        isLoading: false,
        comunicazioni: "error"
      };
    default:
      return state;
  }
};

export default assenzeReducer;
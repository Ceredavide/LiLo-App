import * as actionTypes from "../actionTypes"

const initialState = {
  assenze: []
};

const assenzeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ASSENZE_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_ASSENZE_SUCCESS:
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
    case actionTypes.FETCH_ASSENZE_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default assenzeReducer;
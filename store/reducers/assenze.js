import * as actionTypes from "../actionTypes"

import handleError from "../../services/handleError"

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
      handleError(action.error)
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default assenzeReducer;
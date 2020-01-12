import * as actionTypes from "../actionTypes"

const initialState = {
  loadingList: false,
  loadingPost: false,
  proposte: []
};

const proposteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROPOSTE_START: {
      return { ...state, loadingList: true };
    }
    case actionTypes.FETCH_PROPOSTE_SUCCESS: {
      return {
        ...state,
        proposteList: action.proposte,
        loadingList: false
      };
    }
    case actionTypes.POST_PROPOSTA_ERROR: {
      return {
        ...state,
        loadingList: false
      };
    }
    case "POST_PROPOSTA_START": {
      return { ...state, loadingPost: true };
    }
    case "POST_PROPOSTA_SUCCESS": {
      return { ...state, loadingPost: false };
    }
    case "POST_PROPOSTA_ERROR": {
      console.log(action.payload);
      return { ...state, loadingPost: false };
    }
    default:
      return state;
  }
};

export default proposteReducer;
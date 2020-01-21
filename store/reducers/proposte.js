import * as actionTypes from "../actionTypes"

import handleError from "../../services/handleError"

const initialState = {
  loadingList: false,
  loadingPost: false,
  proposte: [],
  classiArray: [],
  numeriArray: []
};

const proposteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROPOSTE_START: {
      return { ...state, loadingList: true };
    }
    case actionTypes.FETCH_PROPOSTE_SUCCESS: {
      const { data, classi } = action.proposte
      const arrClassi = []
      const arrNumeri = []
      classi.sort((a, b) => { return b.n - a.n });
      const newClassi = classi.splice(0, 5)
      newClassi.forEach(classe => { arrClassi.push(classe.classe); arrNumeri.push(classe.n) })
      return {
        ...state,
        proposte: data,
        classiArray: arrClassi,
        numeriArray: arrNumeri,
        loadingList: false
      };
    }
    case actionTypes.FETCH_PROPOSTE_ERROR: {
      handleError(action.error)
      return {
        ...state,
        loadingList: false
      };
    }
    case actionTypes.POST_PROPOSTA_START: {
      return { ...state, loadingPost: true };
    }
    case actionTypes.POST_PROPOSTA_SUCCESS: {
      return {
        ...state,
        proposte: [...state.proposte, action.proposta],
        loadingPost: false
      };
    }
    case actionTypes.POST_PROPOSTA_ERROR: {
      handleError(action.error)
      return { ...state, loadingPost: false };
    }
    default:
      return state;
  }
};

export default proposteReducer;
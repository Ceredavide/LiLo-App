import * as actionTypes from "../actionTypes"

import handleError from "../../services/handleError"

const initialState = {
  loadingList: false,
  loadingPost: false,
  proposte: [],
  nProposte: "",
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
      const nProposte = data.length
      const arrClassi = []
      const arrNumeri = []
      classi.sort((a, b) => { return b.n - a.n });
      const newClassi = classi.splice(0, 5)
      newClassi.forEach(classe => { arrClassi.push(classe.classe); arrNumeri.push(classe.n) })
      const proposte = data.splice(0, 10)
      return {
        ...state,
        proposte: proposte,
        nProposte: nProposte,
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
        nProposte: state.nProposte + 1,
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
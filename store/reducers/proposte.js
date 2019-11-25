const initialState = {
  loadingList: false,
  loadingPost: false,
  proposteList: []
};

const proposteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROPOSTE_START": {
      return { ...state, loadingList: true };
    }
    case "FETCH_PROPOSTE_SUCCESS": {
      const newArray = [];
      const proposte = action.payload
      proposte.forEach(proposta => {
        newArray.push({ id: proposta.id, proposta: proposta.data() });
      });
      console.log(newArray);
      return {
        ...state,
        proposteList: action.payload,
        loadingList: false
      };
    }
    case "FETCH_PROPOSTE_ERROR": {
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

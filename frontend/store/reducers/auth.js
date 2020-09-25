const initialState = {
  user: {
    proposte: [],
    _id: "",
    nome: "",
    cognome: "",
    classe: "",
    email: "",
    role: ""
  },
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTORE_AUTH":
      console.log(action.user)
      return {
        ...state,
        user: action.user,
      };

    case "SIGN_IN":
      return {
        ...state,
        user: action.user,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        user: initialState.user,
      };

    default:
      return state;
  }
};

export default userReducer;
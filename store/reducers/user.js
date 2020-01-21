import * as actionTypes from "../actionTypes"

const initialState = {
  id: "",
  nome: "",
  cognome: "",
  classe: "",
  email: "",
  isAdmin: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_USER_CREDENTIALS:
      const { _id, nome, cognome, classe, email } = action.user;
      const isAdmin =
        email === "andrixmelone01@gmail.com" ||
        email === "samuele.meschini@outlook.it" ||
        email === "ceredavide@live.it";
      return {
        ...state,
        id: _id,
        nome: nome,
        cognome: cognome,
        classe: classe,
        email: email,
        isAdmin: isAdmin
      };
    case actionTypes.DELETE_USER_CREDENTIALS:
      return {
        ...state,
        initialState
      };
    default:
      return state;
  }
};

export default userReducer;
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
    case "SAVE_USER_CREDENTIALS":
      const { id, nome, cognome, classe, email } = action.payload;
      const isAdmin =
        email === "andrixmelone01@gmail.com" ||
        email === "samuele.meschini@outlook.it" ||
        email === "ceredavide@live.it";
      return {
        ...state,
        id: id,
        nome: nome,
        cognome: cognome,
        classe: classe,
        isAdmin: isAdmin
      };
    case "DELETE_USER_CREDENTIALS":
      return {
        ...state,
        id: "",
        nome: "",
        cognome: "",
        classe: "",
        isAdmin: ""
      };
    default:
      return state;
  }
};

export default userReducer;

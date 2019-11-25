import firebase from "firebase";
import "@firebase/storage";

const initialState = {
  loading: false,
  comunicazioni: []
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMUNICAZIONI_START":
      return {
        ...state,
        loading: true
      };
    case "FETCH_COMUNICAZIONI_SUCCESS":
      const comunicazioni = action.payload;
      return {
        ...state,
        loading: false,
        comunicazioni: comunicazioni
      };
    case "FETCH_COMUNICAZIONI_ERROR":
      return {
        ...state,
        loading: false,
        comunicazioni: "error"
      };
    case "POST_COMUNICAZIONE_START":
      return {
        ...state,
        loading: true
      };
    case "POST_COMUNICAZIONE_SUCCESS":
      console.log("porcoddio funziona");
      return {
        ...state,
        loading: false
      };
    case "POST_COMUNICAZIONE_ERROR":
      console.log(action.payload);
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default comunicazioniReducer;

import * as actionTypes from "./actionTypes";

import { Studenti } from "../../data/studenti";

export const saveUser = email => {
  return dispatch => {
    const studenteId = Studenti.findIndex(
      studente => studente.email.trim() === email
    );
    const studente = Studenti.find(studente => studente.email.trim() === email);
    const studenteObj = { id: studenteId, ...studente };
    dispatch({
      type: actionTypes.SAVE_USER_CREDENTIALS,
      payload: studenteObj
    });
  };
};

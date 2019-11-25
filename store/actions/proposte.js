import * as actionTypes from "./actionTypes";

import firebase from "firebase";
import "@firebase/firestore";

export const fetchProposte = () => {
  return async dispatch => {
    dispatch({ type: actionTypes.FETCH_PROPOSTE_START });
    const db = firebase.firestore();
    db.collection("proposte")
      .get()
      .then(proposte => {
        dispatch({
          type: actionTypes.FETCH_PROPOSTE_SUCCESS,
          payload: proposte
        });
      })
      .catch(error => {
        dispatch({ type: actionTypes.FETCH_PROPOSTE_ERROR, payload: error });
      });
  };
};

export const postProposta = (proposta, user) => {
  const { nome, cognome, classe } = user;
  const { nomeProposta, descrizione, richieste, numeroPartecipanti } = proposta;
  return async dispatch => {
    dispatch({ type: actionTypes.POST_PROPOSTA_START });
    const db = firebase.firestore();
    db.collection("proposte")
      .add({
        nomeStudente: nome,
        cognomeStudente: cognome,
        classeStudente: classe,
        nomeProposta: nomeProposta,
        descrizioneProposta: descrizione,
        richiesteProposta: richieste,
        numeroPartecipantiProposta: numeroPartecipanti
      })
      .then(docRef => {
        dispatch({ type: actionTypes.POST_PROPOSTA_SUCCESS, payload: docRef });
      })
      .catch(error => {
        dispatch({ type: actionTypes.POST_PROPOSTA_ERROR, payload: error });
      });
  };
};

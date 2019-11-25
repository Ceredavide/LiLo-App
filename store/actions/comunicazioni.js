import * as actionTypes from "./actionTypes";

import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";

export const fetchComunicazioni = () => {
  const newArray = [];
  return async dispatch => {
    dispatch({ type: actionTypes.FETCH_COMUNICAZIONI_START });
    firebase
      .firestore()
      .collection("comunicazioni")
      .get()
      .then(comunicazioni => {
        comunicazioni.forEach(comunicazione => {
          firebase
            .storage()
            .ref(comunicazione.data().immagine)
            .getDownloadURL()
            .then(imageUrl => {
              newArray.push({ ...comunicazione.data(), immagine: imageUrl });
            })
            .then(() =>
              dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_SUCCESS,
                payload: newArray
              })
            );
        });
      })
      .catch(error =>
        dispatch({
          type: actionTypes.FETCH_COMUNICAZIONI_ERROR,
          payload: error
        })
      );
  };
};

export const postComunicazione = values => {
  const { titolo, sottotitolo, testo, image } = values;
  return async dispatch => {
    dispatch({ type: actionTypes.POST_COMUNICAZIONE_START });
    const db = firebase.firestore();
    const response = await fetch(image);
    const blob = await response.blob();
    const imageRef = "comunicazioni/" + titolo.toLowerCase();
    firebase
      .storage()
      .ref()
      .child(imageRef)
      .put(blob)
      .then(() =>
        db
          .collection("comunicazioni")
          .add({
            titolo: titolo,
            sottotitolo: sottotitolo,
            testo: testo,
            immagine: imageRef
          })
          .then(docRef => {
            dispatch({
              type: actionTypes.POST_COMUNICAZIONE_SUCCESS,
              payload: docRef
            });
          })
          .catch(error => {
            dispatch({
              type: actionTypes.POST_COMUNICAZIONE_ERROR,
              payload: error
            });
          })
      );
  };
};

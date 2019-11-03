export const FETCH_COMUNICAZIONI = "FETCH_COMUNICAZIONI";
export const ADD_COMUNICAZIONE = "ADD_COMUNICAZIONE";
export const DELETE_COMUNICAZIONE = "DELETE_COMUNICAZIONE";

export const fetchComunicazioni = () => {
  return async dispatch => {
    const response = await fetch(
      "https://lilo-back-end.firebaseio.com/comunicazioni.json"
    );
    const resData = await response.json();
    console.log("funziona!")
    console.log(resData);
    dispatch({
      type: FETCH_COMUNICAZIONI,
      comunicazioniData: resData
    });
    console.log("bella!")
  };
};

export const addComunicazione = comunicazione => {
  return async dispatch => {
    const response = await fetch(
      "https://lilo-back-end.firebaseio.com/comunicazioni.json",
      {
        method: "POST",
        headers: {
          "Content-type": "Application/json"
        },
        body: JSON.stringify(comunicazione)
      }
    );
    const resData = await response.json();
    console.log(resData);
    dispatch({
      type: ADD_COMUNICAZIONE,
      comunicazioneData: {
        id: resData.name,
        comunicazione
      }
    });
  };
};

export const deleteComunicazione = () => {
  return dispatch => {
    dispatch({
      type: DELETE_COMUNICAZIONE,
      cid: comunicazioneId
    });
  };
};

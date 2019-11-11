import * as actionTypes from "./actionTypes";

export const fetchComunicazioni = () => {
  return async dispatch => {
    dispatch({ type: actionTypes.FETCH_COMUNICAZIONI_START });
    try {
      const response = await fetch(
        "http://liloautogestito.ch/API/comunicazioni_static.py"
      );
      const resData = await response.json();
      dispatch({
        type: actionTypes.FETCH_COMUNICAZIONI_SUCCESS,
        comunicazioniData: resData
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_COMUNICAZIONI_ERROR,
        error: error
      });
    }
  };
};

// export const addComunicazione = comunicazione => {
//   return async dispatch => {
//     const response = await fetch(
//       "https://lilo-back-end.firebaseio.com/comunicazioni.json",
//       {
//         method: "POST",
//         headers: {
//           "Content-type": "Application/json"
//         },
//         body: JSON.stringify(comunicazione)
//       }
//     );
//     const resData = await response.json();
//     console.log(resData);
//     dispatch({
//       type: ADD_COMUNICAZIONE,
//       comunicazioneData: {
//         id: resData.name,
//         comunicazione
//       }
//     });
//   };
// };

// export const deleteComunicazione = () => {
//   return dispatch => {
//     dispatch({
//       type: DELETE_COMUNICAZIONE,
//       cid: comunicazioneId
//     });
//   };
// };

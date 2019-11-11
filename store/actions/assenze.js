import * as actionTypes from "./actionTypes";

export const fetchAssenze = () => {
  return async dispatch => {
    dispatch({ type: actionTypes.FETCH_ASSENZE_START });
    try {
      const response = await fetch(
        "http://liloautogestito.ch/API/assenze_docenti.py?ses=707bed165969b062c3265679688634664d67593c9fe8583bc445110cae30c790"
      );
      const resData = await response.json();
      console.log(resData)
      dispatch({
        type: actionTypes.FETCH_ASSENZE_SUCCESS,
        assenzeData: resData
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ASSENZE_ERROR,
        error: error
      });
    }
  };
};
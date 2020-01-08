import * as actionTypes from "../actionTypes";
import axios from "axios";

export const fetchAssenze = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_ASSENZE_START });
        try {
            const response = await axios.get(
                "http://liloautogestito.ch/API/assenze_docenti.py?ses=707bed165969b062c3265679688634664d67593c9fe8583bc445110cae30c790"
            )
            dispatch({
                type: actionTypes.FETCH_ASSENZE_SUCCESS,
                assenzeData: response.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ASSENZE_ERROR,
                error: error
            });
        }
    };
}; 
import * as actionTypes from "../actionTypes";
import { AsyncStorage } from "react-native"
import axios from "axios";

export const fetchProposte = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_PROPOSTE_START });
        try {
            const user = await JSON.parse(await AsyncStorage.getItem("user"))
            const proposte = await axios.get("https://cere.dev/proposte", {
                headers: {
                    Authorization: "Bearer " + user.accessToken
                }
            })
            dispatch({
                type: actionTypes.FETCH_PROPOSTE_SUCCESS,
                proposte: proposte.data.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_PROPOSTE_ERROR,
                error: error
            });
        }
    };
}; 
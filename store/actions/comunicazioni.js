import * as actionTypes from "../actionTypes";
import { AsyncStorage } from "react-native"
import axios from "axios";

import handleError from "../../utils/handleError"

export const fetchComunicazioni = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_COMUNICAZIONI_START });
        try {
            const user = await JSON.parse(await AsyncStorage.getItem("user"))
            const response = await axios.get("https://cere.dev/comunicazioni", {
                headers: {
                    Authorization: "Bearer " + user.accessToken
                }
            })
            dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_SUCCESS,
                comunicazioni: response.data.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_ERROR,
                error: error
            });
        }
    };
};

export const refreshComunicazioni = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.REFRESH_COMUNICAZIONI_START });
        try {
            const user = await JSON.parse(await AsyncStorage.getItem("user"))
            const response = await axios.get("https://cere.dev/comunicazioni", {
                headers: {
                    Authorization: "Bearer " + user.accessToken
                }
            })
            dispatch({
                type: actionTypes.REFRESH_COMUNICAZIONI_SUCCESS,
                comunicazioni: response.data.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.REFRESH_COMUNICAZIONI_ERROR,
                error: error
            });
        }
    };
}

export const postComunicazione = ({ titolo, sottotitolo, paragrafo, image }, navigation) => {
    return async dispatch => {
        const user = await JSON.parse(await AsyncStorage.getItem("user"))
        dispatch({ type: actionTypes.POST_COMUNICAZIONE_START });
        const data = { "uri": "data:image/jpeg;base64," + image }
        axios.post("https://cere.dev/uploads", data, {
            headers: {
                Authorization: "Bearer " + user.accessToken
            }
        }).then(response => {
            const comunicazione = {
                titolo: titolo,
                sottotitolo: sottotitolo,
                paragrafo: paragrafo,
                immagine: response.data.id
            }
            axios.post("https://cere.dev/comunicazioni", comunicazione, {
                headers: {
                    Authorization: "Bearer " + user.accessToken
                }
            }).then(response => {
                dispatch({
                    type: actionTypes.POST_COMUNICAZIONE_SUCCESS,
                    comunicazione: response.data
                })
                navigation.goBack()
            })
                .catch(error => {
                    dispatch({
                        type: actionTypes.POST_COMUNICAZIONE_ERROR,
                        error: error
                    })
                })
        }).catch(error => {
            dispatch({
                type: actionTypes.POST_COMUNICAZIONE_ERROR,
                error: error
            })
        })
    };
};

export const deleteComunicazione = (id, immagine) => {
    return async dispatch => {
        const user = await JSON.parse(await AsyncStorage.getItem("user"))
        axios.delete(`https://cere.dev/uploads/${immagine}`)
            .then(() => {
                axios.delete(`https://cere.dev/comunicazioni/${id}`, {
                    headers: {
                        Authorization: "Bearer " + user.accessToken
                    }
                })
                dispatch({ type: actionTypes.REMOVE_ONE_COMUNICAZIONE, id: id })
            }).catch(error => {
                handleError(error)
            })
    }
}
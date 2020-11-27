import * as actionTypes from "../actionTypes";

import axios from "axios";

import { Alert } from "react-native"

import checkConnection from "../../utils/checkConnection"

import getEnvVars from "../../configuration"
const { apiUrl } = getEnvVars()

export function fetchComunicazioni(token) {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_COMUNICAZIONI_START });
        try {
            await checkConnection()
            const response = await axios.get(`${apiUrl}/api/comunicazioni`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_SUCCESS,
                payload: {
                    comunicazioni: response.data.comunicazioni,
                    tags: response.data.tags
                }
            });
        } catch (error) {
            console.log(error)
            dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_ERROR,
                error: error
            });
        }
    };
};

export function refreshComunicazioni(token) {
    return async dispatch => {
        dispatch({ type: actionTypes.REFRESH_COMUNICAZIONI_START });
        try {
            const response = await axios.get(`${apiUrl}/api/comunicazioni`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            dispatch({
                type: actionTypes.REFRESH_COMUNICAZIONI_SUCCESS,
                payload: {
                    comunicazioni: response.data.comunicazioni,
                    tags: response.data.tags
                }
            });
        } catch (error) {
            dispatch({
                type: actionTypes.REFRESH_COMUNICAZIONI_ERROR,
                error: error
            });
        }
    };
}

export function postComunicazione(comunicazione, navigation, token) {

    return async dispatch => {

        dispatch({ type: actionTypes.POST_COMUNICAZIONE_START });

        try {

            const response = await axios.post(`${apiUrl}/api/comunicazioni`, comunicazione, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            dispatch({
                type: actionTypes.POST_COMUNICAZIONE_SUCCESS,
                comunicazione: response.data.comunicazione
            })

            navigation.goBack()

        } catch (error) {
            dispatch({
                type: actionTypes.POST_COMUNICAZIONE_ERROR,
                error: error
            })
        }
    }
}

export function editComunicazione(comunicazione, navigation, token) {

    const { _id } = comunicazione

    return async dispatch => {

        dispatch({ type: actionTypes.EDIT_COMUNICAZIONE_START });


        try {

            const response = await axios.put(`${apiUrl}/api/comunicazioni/${_id}`, comunicazione, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            dispatch({
                type: actionTypes.EDIT_COMUNICAZIONE_SUCCESS,
                comunicazione: response.data.comunicazione
            })

            navigation.goBack()

        } catch (error) {
            dispatch({
                type: actionTypes.EDIT_COMUNICAZIONE_ERROR,
                error: error
            })
        }
    }
}

export function deleteComunicazione(id, token) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${apiUrl}/api/comunicazioni/${id}`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            dispatch({
                type: actionTypes.REMOVE_ONE_COMUNICAZIONE,
                id: response.data.id
            })
        } catch (error) {
            Alert.alert(error.response.data)
        }
    }
}
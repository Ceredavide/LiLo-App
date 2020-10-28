import * as actionTypes from "../actionTypes";

import * as FileSystem from 'expo-file-system';
import { FileSystemUploadType } from "expo-file-system";

import axios from "axios";

import { Alert } from "react-native"

import checkConnection from "../../utils/checkConnection"

export function fetchComunicazioni(token) {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_COMUNICAZIONI_START });
        try {
            await checkConnection()
            const response = await axios.get("http://localhost:5000/api/comunicazioni", {
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
            const response = await axios.get("http://localhost:5000/api/comunicazioni", {
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

    const { titolo, sottotitolo, paragrafo, tags, immagine } = comunicazione

    return async dispatch => {

        dispatch({ type: actionTypes.POST_COMUNICAZIONE_START });

        const response = await FileSystem.uploadAsync('http://localhost:5000/api/comunicazioni',
            immagine,
            {
                uploadType: FileSystemUploadType.MULTIPART,
                httpMethod: "POST",
                headers: {
                    Authorization: "Bearer " + token,
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                fieldName: "image",
                mimeType: "image/jpg",
                parameters: {
                    titolo,
                    sottotitolo,
                    paragrafo,
                    tags
                }
            });

        if (response.status !== 201) {
            Alert.alert(response.body)
            dispatch({
                type: actionTypes.POST_COMUNICAZIONE_ERROR,
                error: response.body
            })
        } else {

            const parsedRes = JSON.parse(response.body)

            dispatch({
                type: actionTypes.POST_COMUNICAZIONE_SUCCESS,
                comunicazione: parsedRes.comunicazione
            })
            navigation.goBack()
        }
    }
}

export function editComunicazione(comunicazione, navigation, token) {

    const { _id, titolo, sottotitolo, paragrafo, tags, immagine } = comunicazione

    return async dispatch => {

        dispatch({ type: actionTypes.EDIT_COMUNICAZIONE_START });

        const response = await FileSystem.uploadAsync(`http://localhost:5000/api/comunicazioni/${_id}`,
            immagine,
            {
                uploadType: FileSystemUploadType.MULTIPART,
                httpMethod: "PUT",
                headers: {
                    Authorization: "Bearer " + token,
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                fieldName: "image",
                mimeType: "image/jpg",
                parameters: {
                    _id,
                    titolo,
                    sottotitolo,
                    paragrafo,
                    tags
                }
            });

        if (response.status !== 200) {
            Alert.alert(response.body)
            dispatch({
                type: actionTypes.EDIT_COMUNICAZIONE_ERROR,
                error: response.body
            })
        } else {

            const parsedRes = JSON.parse(response.body)

            dispatch({
                type: actionTypes.EDIT_COMUNICAZIONE_SUCCESS,
                comunicazione: parsedRes.comunicazione
            })
            navigation.goBack()
        }
    }
}

export function deleteComunicazione(id, token) {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/comunicazioni/${id}`, {
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
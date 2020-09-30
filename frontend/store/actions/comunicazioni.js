import * as actionTypes from "../actionTypes";
import * as SecureStore from 'expo-secure-store';

import * as FileSystem from 'expo-file-system';
import { FileSystemUploadType } from "expo-file-system";

import axios from "axios";

import { Alert, Platform } from "react-native"

import checkConnection from "../../utils/checkConnection"
import handleError from "../../utils/handleError"

export const fetchComunicazioni = (token) => {
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
                comunicazioni: response.data.comunicazioni
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_ERROR,
                error: error
            });
        }
    };
};

export const refreshComunicazioni = (token) => {
    return async dispatch => {
        dispatch({ type: actionTypes.REFRESH_COMUNICAZIONI_START });
        try {
            const response = await axios.get("http://10.3.141.190:5000/api/comunicazioni", {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            dispatch({
                type: actionTypes.REFRESH_COMUNICAZIONI_SUCCESS,
                comunicazioni: response.data.comunicazioni
            });
        } catch (error) {
            dispatch({
                type: actionTypes.REFRESH_COMUNICAZIONI_ERROR,
                error: error
            });
        }
    };
}

export const postComunicazione = ({ titolo, sottotitolo, paragrafo, immagine }, navigation, token) => {

    return async dispatch => {

        dispatch({ type: actionTypes.POST_COMUNICAZIONE_START });

        try {

            const response = await FileSystem.uploadAsync('http://10.3.141.190:5000/api/comunicazioni',
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
                        paragrafo
                    }
                });

            console.log(comunicazione)

            dispatch({
                type: actionTypes.POST_COMUNICAZIONE_SUCCESS,
                comunicazione: response.data.comunicazione
            })

            navigation.goBack()

        } catch (error) {
            console.log(error)
            Alert.alert(error.response.data)
            dispatch({
                type: actionTypes.POST_COMUNICAZIONE_ERROR,
                error: error
            })
        }
    };
};

export const deleteComunicazione = (id, token) => {
    return async dispatch => {

        try {
            const response = await axios.delete(`http://10.3.141.190:5000/api/comunicazioni/${id}`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            dispatch({ type: actionTypes.REMOVE_ONE_COMUNICAZIONE, id: response.data.id })
        } catch (error) {
            Alert.alert(error.response.data)
        }
    }
}
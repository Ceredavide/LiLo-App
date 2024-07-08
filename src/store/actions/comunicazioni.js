import * as actionTypes from "../actionTypes";

import axios from "axios";

import { Alert } from "react-native"

import checkConnection from "../../utils/checkConnection"

import getEnvVars from "../../Configuration"
const { apiUrl } = getEnvVars()

export function fetchComunicazioni(token) {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_COMUNICAZIONI_START });
        try {
            await checkConnection();

            if (token === "123456789") {
                // Popola le comunicazioni con dati dummy
                const dummyData = {
                    comunicazioni: [
                        {
                            _id: 1,
                            titolo: "Dummy Comunicazione 1",
                            sottotitolo: "Sottotitolo della dummy comunicazione 1",
                            tags: [
                                { nome: "tag1", iconName: "star", colore: "#ff7954" },
                                { nome: "tag2", iconName: "sync", colore: "#7ddc1f" }
                            ],
                            immagine: "https://science.nasa.gov/wp-content/uploads/2024/06/stsci-01hzmfyq7k9gr4za93kyn0egsj-annotated-4k.jpg?w=2560&format=webp",
                            createdAt: "2024-01-01T12:00:00Z"
                        },
                        {
                            _id: 2,
                            titolo: "Dummy Comunicazione 2",
                            sottotitolo: "Sottotitolo della dummy comunicazione 2",
                            tags: [
                                { nome: "tag3", iconName: "check", colore: "#f4e604" },
                                { nome: "tag4", iconName: "redo", colore: "#8400ff" }
                            ],
                            immagine: "https://dummyimage.com/600x400/000/fff&text=Dummy2",
                            createdAt: "2024-01-02T12:00:00Z"
                        }
                    ],
                    tags: [
                        { nome: "tag1", iconName: "icon1", colore: "#ff7954" },
                        { nome: "tag2", iconName: "icon2", colore: "#7ddc1f" },
                        { nome: "tag3", iconName: "icon3", colore: "#f4e604" },
                        { nome: "tag4", iconName: "icon4", colore: "#8400ff" }
                    ]
                };
                dispatch({
                    type: actionTypes.FETCH_COMUNICAZIONI_SUCCESS,
                    payload: dummyData
                });
            } else {
                const response = await axios.get(`${apiUrl}/api/comunicazioni`, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                dispatch({
                    type: actionTypes.FETCH_COMUNICAZIONI_SUCCESS,
                    payload: {
                        comunicazioni: response.data.comunicazioni,
                        tags: response.data.tags
                    }
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_ERROR,
                error: error
            });
        }
    };
}

export function refreshComunicazioni(token) {
    return async dispatch => {
        dispatch({ type: actionTypes.REFRESH_COMUNICAZIONI_START });
        try {
            if (token === "123456789") {
                // Popola le comunicazioni con dati dummy
                const dummyData = {
                    comunicazioni: [
                        {
                            _id: 1,
                            titolo: "Dummy Comunicazione 1",
                            sottotitolo: "Sottotitolo della dummy comunicazione 1",
                            tags: [
                                { nome: "tag1", iconName: "star", colore: "#ff7954" },
                                { nome: "tag2", iconName: "sync", colore: "#7ddc1f" }
                            ],
                            immagine: "https://science.nasa.gov/wp-content/uploads/2024/06/stsci-01hzmfyq7k9gr4za93kyn0egsj-annotated-4k.jpg?w=2560&format=webp",
                            createdAt: "2024-01-01T12:00:00Z"
                        },
                        {
                            _id: 2,
                            titolo: "Dummy Comunicazione 2",
                            sottotitolo: "Sottotitolo della dummy comunicazione 2",
                            tags: [
                                { nome: "tag3", iconName: "check", colore: "#f4e604" },
                                { nome: "tag4", iconName: "redo", colore: "#8400ff" }
                            ],
                            immagine: "https://dummyimage.com/600x400/000/fff&text=Dummy2",
                            createdAt: "2024-01-02T12:00:00Z"
                        }
                    ],
                    tags: [
                        { nome: "tag1", iconName: "icon1", colore: "#ff7954" },
                        { nome: "tag2", iconName: "icon2", colore: "#7ddc1f" },
                        { nome: "tag3", iconName: "icon3", colore: "#f4e604" },
                        { nome: "tag4", iconName: "icon4", colore: "#8400ff" }
                    ]
                };
                dispatch({
                    type: actionTypes.REFRESH_COMUNICAZIONI_SUCCESS,
                    payload: dummyData
                });
            } else {
                const response = await axios.get(`${apiUrl}/api/comunicazioni`, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                dispatch({
                    type: actionTypes.REFRESH_COMUNICAZIONI_SUCCESS,
                    payload: {
                        comunicazioni: response.data.comunicazioni,
                        tags: response.data.tags
                    }
                });
            }
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
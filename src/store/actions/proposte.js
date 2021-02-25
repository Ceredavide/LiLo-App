import * as actionTypes from "../actionTypes";
import { Alert } from "react-native"
import axios from "axios";

import getEnvVars from "../../Configuration"
const { apiUrl } = getEnvVars()

export const fetchProposte = (token) => {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_PROPOSTE_START });
        try {
            const proposte = await axios.get(`${apiUrl}/api/proposte`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            dispatch({
                type: actionTypes.FETCH_PROPOSTE_SUCCESS,
                proposte: proposte.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_PROPOSTE_ERROR,
                error: error
            });
        }
    };
};

export const refreshProposte = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_PROPOSTE_START });
        try {
            const proposte = await axios.get(`${apiUrl}/api/proposte`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            dispatch({
                type: actionTypes.FETCH_PROPOSTE_SUCCESS,
                proposte: proposte.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_PROPOSTE_ERROR,
                error: error
            });
        }
    };
};

export const postProposta = ({ nome, descrizione, numeroPartecipantiMax, richieste }, navigation) => {
    return async dispatch => {
        const user = await JSON.parse(await SecureStore.getItemAsync("user"))
        dispatch({ type: actionTypes.POST_PROPOSTA_START });
        const data = {
            nome: nome,
            descrizione: descrizione,
            numeroPartecipantiMax: numeroPartecipantiMax,
            richieste: richieste
        }
        axios.post("https://cere.dev/proposte", data, {
            headers: {
                Authorization: "Bearer " + user.accessToken
            }
        }).then(response => {
            if (response.status == 201) {
                dispatch({ type: actionTypes.POST_PROPOSTA_SUCCESS, proposta: data })
                Alert.alert("Proposta inviata con successo.")
                navigation.goBack()
            }
        }).catch(error => {
            dispatch({
                type: actionTypes.POST_PROPOSTA_ERROR,
                error: error
            })
        })
    }
}
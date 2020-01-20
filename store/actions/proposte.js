import * as actionTypes from "../actionTypes";
import { AsyncStorage, Alert } from "react-native"
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

export const postProposta = ({ nome, descrizione, numeroPartecipantiMax, richieste }, navigation) => {
    return async dispatch => {
        const user = await JSON.parse(await AsyncStorage.getItem("user"))
        dispatch({ type: actionTypes.POST_PROPOSTA_START });
        const data = {
            nome: nome,
            descrizione: descrizione,
            numeroPartecipantiMax: numeroPartecipantiMax,
            richieste: richieste,
            studente: {
                _id: user.user._id,
                nome: user.user.nome,
                cognome: user.user.cognome,
                classe: user.user.classe
            }
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
            dispatch({ type: actionTypes.POST_PROPOSTA_ERROR })
            // TODO: Gestire meglio gli errori
            Alert.alert(error.response.data.message)

        })
    }
}
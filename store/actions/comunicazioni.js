import * as actionTypes from "../actionTypes";
import { AsyncStorage } from "react-native"
import axios from "axios";

export const fetchComunicazioni = () => {
    return async dispatch => {
        dispatch({ type: actionTypes.FETCH_COMUNICAZIONI_START });
        try {
            const user = await JSON.parse(await AsyncStorage.getItem("user"))
            const comunicazioni = await axios.get("https://cere.dev/comunicazioni", {
                headers: {
                    Authorization: "Bearer " + user.accessToken
                }
            })
            dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_SUCCESS,
                comunicazioni: comunicazioni.data.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_COMUNICAZIONI_ERROR,
                error: error
            });
        }
    };
};

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
            console.log("immagine caricata con successo")
            const comunicazione = {
                titolo: titolo,
                sottotitolo: sottotitolo,
                paragrafo: paragrafo,
                immagine: response.data.id,
                studente: {
                    _id: user.user._id,
                    nome: user.user.nome,
                    cognome: user.user.cognome,
                    classe: user.user.classe
                }
            }
            console.log(comunicazione)
            axios.post("https://cere.dev/comunicazioni", comunicazione, {
                headers: {
                    Authorization: "Bearer " + user.accessToken
                }
            }).then(response => {
                console.log(response.data)
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
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error);
            dispatch({
                type: actionTypes.POST_COMUNICAZIONE_ERROR,
                error: error
            })
        })
    };
};

export const deleteComunicazione = (id, immagine) => {
    console.log(id)
    console.log(immagine)
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
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error);
            })
    }
}
import axios from "axios"
import { AsyncStorage } from "react-native";

export default postProposta = async (nome, descrizione, numeroPartecipantiMax, richieste) => {
    const user = await JSON.parse(await AsyncStorage.getItem("user"))
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
        },
    }
    axios.post("https://cere.dev/proposte", data, {
        headers: {
            Authorization: "Bearer " + user.accessToken
        }
    }).then(res => console.log(res)).catch(e => console.log(e))
    //gestire meglio errori
}
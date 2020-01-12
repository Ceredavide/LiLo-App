import axios from "axios"
import { Alert } from "react-native";

export default createUser = (user, navigation) => {
    const userData = {
        nome: user.nome,
        cognome: user.cognome,
        classe: user.classe,
        email: user.email,
        password: user.password

    }

    axios.post("https://cere.dev/users", userData)
        .then(response => {
            if (response.status == 201) {
                Alert.alert("Account creato con successo!")
                navigation.goBack()
            }
        })
        .catch(error => {
            console.log(error.response)
            if (error.response.status == 409) {
                Alert.alert("Un utente con queste credenziali esiste già")
            }
            // errore generato dal back-end quando non funza
            else if (error.response.status == 502) {
                Alert.alert("Qualcosa è andato storto")
                // Qui non so quale sia l'errore, quindi lo printa e basta
            } else {
                Alert.alert(error.response.data.message)
            }
        })
};
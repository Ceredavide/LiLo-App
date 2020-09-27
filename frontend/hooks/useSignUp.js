import { useState } from "react"
import axios from "axios"
import { Alert } from "react-native";
import { useFormik } from "formik";

import signUpSchema from "../validation/signUpSchema"

const useSignUp = (navigation) => {
    const [isLoading, setIsLoading] = useState(false)

    async function createUser(user, navigation) {
        const userData = {
            nome: user.nome,
            cognome: user.cognome,
            classe: user.classe,
            email: user.email,
            password: user.password

        }
        try {
            response = await axios.post("https://cere.dev/users", userData)
            if (response.status == 201) {
                Alert.alert("Account creato con successo!")
                navigation.goBack()
            }
        } catch (error) {
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
        }
        return false
    };

    const initialValues = {
        nome: "",
        cognome: "",
        classe: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const formikSignUp = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            await createUser(values, navigation)
            setIsLoading(false)
        }
    })

    return { isLoading, formikSignUp }
}

export default useSignUp
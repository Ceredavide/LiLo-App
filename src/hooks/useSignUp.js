import { useState } from "react"
import { Alert } from "react-native";
import { useFormik } from "formik";

import axios from "axios"

import signUpSchema from "../validation/signUpSchema"

import checkConnection from "../utils/checkConnection"

import useEnvVars from "../Configuration"

const { apiUrl } = useEnvVars()

const useSignUp = (navigation) => {
    const [isLoading, setIsLoading] = useState(false)

    async function createUser(user, navigation) {
        setIsLoading(true)
        try {
            await checkConnection()
            await axios.post(`${apiUrl}/auth/signup`, user)
            navigation.navigate("EmailConfirmation")
        } catch (error) {
            Alert.alert(error.response?.data || "Qualcosa è andato storto.")
        } finally {
            setIsLoading(false)
        }
    };

    const initialValues = {
        nome: "",
        cognome: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const formikSignUp = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            await createUser(values, navigation)
        }
    })

    return { isLoading, formikSignUp }
}

export default useSignUp
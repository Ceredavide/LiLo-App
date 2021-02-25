import { useState, useContext } from "react"
import { Alert } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import { useFormik } from "formik";

import { AuthContext } from '../Context'

import loginSchema from "../validation/loginSchema"

import axios from "axios";

import checkConnection from "../utils/checkConnection"

import useEnvVars from "../Configuration"
const { apiUrl } = useEnvVars()

const useLogin = () => {

    const { setAuth } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(false);

    async function tryLogin({ email, password }) {
        setIsLoading(true);
        try {
            await checkConnection()
            const response = await axios.post(`${apiUrl}/auth/login`, {
                email: email,
                password: password
            })
            await SecureStore.setItemAsync("user", JSON.stringify(response.data))
            setAuth(response.data)
        } catch (error) {
            Alert.alert(error.response?.data || "Qualcosa è andato storto.")
        } finally {
            setIsLoading(false)
        }
    }

    const formikLogin = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: loginSchema,
        onSubmit: tryLogin
    })

    return { isLoading, formikLogin }

}

export default useLogin
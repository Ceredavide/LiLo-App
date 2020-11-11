import { useState, useContext } from "react"
import { Alert } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import { useFormik } from "formik";

import { AuthContext } from '../Context'

import loginSchema from "../validation/loginSchema"

import axios from "axios";

import checkConnection from "../utils/checkConnection"

import { apiUrl } from "../configuration"

const useLogin = () => {

    const { setAuth } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin({ email, password }) {
        setIsLoading(true);
        try {
            const data = await tryLogin(email, password)
            if (!!data) {
                console.log(data)
                setAuth(data)
            }
        } catch (error) {
            Alert.alert(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    async function tryLogin(email, password) {

        let data

        await checkConnection()
        const response = await axios.post(`${apiUrl}/api/users/login`, {
            email: email,
            password: password
        })

        data = response.data
        await SecureStore.setItemAsync("user", JSON.stringify(response.data))

        return data

    }

    const formikLogin = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: loginSchema,
        onSubmit: handleLogin
    })

    return { isLoading, formikLogin }

}

export default useLogin
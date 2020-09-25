import { useState } from "react"
import { Alert } from 'react-native'
import { useDispatch } from "react-redux"
import * as SecureStore from 'expo-secure-store';
import { useFormik } from "formik";

import loginSchema from "../validation/loginSchema"

import { SIGN_IN } from "../store/actionTypes"

import axios from "axios";

import checkConnection from "../utils/checkConnection"

const useLogin = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin({ email, password }) {
        setIsLoading(true);
        try {
            const user = await tryLogin(email, password)
            if (!!user) {
                dispatch({ type: SIGN_IN, user: user })
            }
        } catch (error) {
            Alert.alert(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    async function tryLogin(email, password) {

        let user

        await checkConnection()
        const response = await axios.post("http://10.3.141.190:5000/api/users/login", {
            email: email,
            password: password
        })

        user = response.data.user
        await SecureStore.setItemAsync("user", JSON.stringify(response.data))

        return user

    }

    const formikLogin = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: loginSchema,
        onSubmit: handleLogin
    })

    return { isLoading, formikLogin }

}

export default useLogin
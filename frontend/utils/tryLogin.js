import axios from "axios";
import {  Alert } from "react-native";
import * as SecureStore from 'expo-secure-store';

import handleError from "./handleError"

export default tryLogin = async (email, password) => {
    try {
        const response = await axios.post("https://cere.dev/authentication", {
            email: email,
            password: password,
            strategy: "local"
        })
        user = response.data.user
        await SecureStore.setItemAsync("user", JSON.stringify(response.data))
    } catch (error) {
        if (error.response.status === 401) {
            Alert.alert("email o password errati, riprovare.")
        } else {
            handleError(error)
        }
        user = null
    }
    return user
}
import axios from "axios";
import { Alert } from "react-native";
import * as SecureStore from 'expo-secure-store';

import handleError from "./handleError"

export default tryLogin = async (email, password) => {

    let user

    try {
        const response = await axios.post("http://localhost:5000/api/users/login", {
            email: email,
            password: password
        })
        user = response.data.user
        await SecureStore.setItemAsync("user", JSON.stringify(response.data))
    } catch (error) {
        console.log(error)
        if (error.response.status === 401) {
            Alert.alert("email o password errati, riprovare.")
        } else {
            handleError(error)
        }
        user = null
    } finally {
        return user
    }
}
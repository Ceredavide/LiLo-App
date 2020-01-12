import axios from "axios";
import { AsyncStorage, Alert } from "react-native";

export default tryLogin = async (email, password, navigation) => {
    axios.post("https://cere.dev/authentication", {
        email: email,
        password: password,
        strategy: "local"
    }).then((response) => {
        AsyncStorage.setItem("user", JSON.stringify(response.data))
        navigation.navigate("App")
        return response.data
    })
        .catch(error => {
            if (error.response.status == 401) {
                Alert.alert("username o password errati")
            }
            return null
        })
}
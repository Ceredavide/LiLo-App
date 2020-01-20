import axios from "axios";
import { AsyncStorage, Alert } from "react-native";

export default tryLogin = async (email, password, navigation) => {
    try {
        response = await axios.post("https://cere.dev/authentication", {
            email: email,
            password: password,
            strategy: "local"
        })
        user = response.data.user
        await AsyncStorage.setItem("user", JSON.stringify(response.data))
        navigation.navigate("App")
    } catch (error) {
        if (error.response.status == 401) {
            Alert.alert("username o password errati")
        }
        user = null
    }
    return user;
}
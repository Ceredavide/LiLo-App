import axios from "axios";
import { AsyncStorage } from "react-native";

export default fetchComunicazioni = async () => {
    const user = await AsyncStorage.getItem("user")
    const userData = await JSON.parse(user)
    const comunicazioni = await axios.get("https://cere.dev/comunicazioni", {
        headers: {
            Authorization: "Bearer "+userData.accessToken
        }
    })
    // GESTIRE ERRORI!
    return data = {comunicazioni: comunicazioni.data.data, userEmail: userData.user.email}
}
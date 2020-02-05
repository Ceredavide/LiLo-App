import { Alert } from "react-native"

export default handleError = error => {
    if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        Alert.alert(
            `Errore ${error.response.status}:`,
            error.response.data.message,
            [
                { text: 'OK', onPress: () => { } },
            ])
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         */
        Alert.alert(error.request);
    } else {
        // Something happened in setting up the request and triggered an Error
        Alert.alert(`Error:', ${error.message}`);
    }
    console.log(error);
}
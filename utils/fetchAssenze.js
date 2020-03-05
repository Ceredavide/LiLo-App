import axios from "axios";

import handleError from "./handleError"

export default fetchAssenze = async () => {
    let assenze = []
    try {
        const response = await axios.get("http://liloautogestito.ch/API/assenze_docenti.py?ses=707bed165969b062c3265679688634664d67593c9fe8583bc445110cae30c790")
        assenze = response.data
    } catch (error) {
        handleError(error)
    } finally {
        return assenze
    }
}
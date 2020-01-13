//TODO: le assenze dovrebbero agire sotto services, redux è esagerato

import axios from "axios";

export default fetchAssenze = async () => {
    const response = await axios.get(
        "http://liloautogestito.ch/API/assenze_docenti.py?ses=707bed165969b062c3265679688634664d67593c9fe8583bc445110cae30c790"
    );
    return response.data
    // gestire errori
}
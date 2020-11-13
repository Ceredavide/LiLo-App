import moment from "moment"

import getEnvVars from "../configuration"
const { apiUrl } = getEnvVars()

export default function renderComunicazioni(comunicazioni) {
    return comunicazioni.map(item => {
        return {
            ...item,
            immagine: `${apiUrl}/${item.immagine}`,
            createdAt: moment(item.createdAt).format("DD/MM")
        }
    })
}
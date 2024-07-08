import moment from "moment"

import getEnvVars from "../Configuration"
const { apiUrl } = getEnvVars()

export default function renderComunicazioni(comunicazioni) {
    return comunicazioni.map(item => {
        return {
            ...item,
            immagine: `${item.immagine}`,
            createdAt: moment(item.createdAt).format("DD/MM")
        }
    })
}
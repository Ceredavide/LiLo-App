import moment from "moment"

export default function renderComunicazioni(comunicazioni) {
    return comunicazioni.map(item => {
        return {
            ...item,
            immagine: `http://localhost:5000/${item.immagine}`,
            createdAt: moment(item.createdAt).format("DD/MM")
        }
    })
}
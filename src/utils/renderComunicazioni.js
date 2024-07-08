import moment from "moment"

export default function renderComunicazioni(comunicazioni) {
    return comunicazioni.map(item => {
        return {
            ...item,
            immagine: `${item.immagine}`,
            createdAt: moment(item.createdAt).format("DD/MM")
        }
    })
}
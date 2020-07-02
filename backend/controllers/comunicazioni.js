const HttpError = require("../models/http-error")
const { v4: uuid } = require("uuid")

const DUMMY_DATA = [
    { id: 1, messaggio: "bella mate" },
    { id: 2, messaggio: "bella mary" },
    { id: 4, messaggio: "bella morad" },
    { id: 6, messaggio: "bella che noia" },
]

const getComunicazioni = (req, res, next) => {
    res.json(DUMMY_DATA)
}

const getComunicazioniById = (req, res, next) => {

    const id = req.params.id
    const comunicazione = DUMMY_DATA.find(c => c.id == id)

    if (!comunicazione) {
        return next(new HttpError("Ct non hai trovato nessuna comunicazione", 404))
    }

    res.json(comunicazione)
}

const createComunicazione = (req, res, next) => {
    const { messaggio } = req.body

    DUMMY_DATA.push({ id: uuid(), messaggio })

    res.status(201).json({ message: "grande mate ce l'hai fatta" })
}

exports.getComunicazioni = getComunicazioni
exports.getComunicazioniById = getComunicazioniById
exports.createComunicazione = createComunicazione
const { v4: uuid } = require("uuid")
const HttpError = require("../models/http-error")

const Comunicazione = require("../models/Comunicazione")

const DUMMY_DATA = [
    { id: 1, messaggio: "bella mate" },
    { id: 2, messaggio: "bella mary" },
    { id: 4, messaggio: "bella morad" },
    { id: 6, messaggio: "bella che noia" },
]

const getComunicazioni = (req, res, next) => {
    res.json(DUMMY_DATA)
}

const getComunicazioniById = async (req, res, next) => {

    const id = req.params.id

    let comunicazione;

    try {
        comunicazione = Comunicazione.findById(id)
    } catch (err) {
        return next(new HttpError("Errore nella ricerca della comunicazione, riprovare.", 500))
    }

    if (!comunicazione) {
        return next(new HttpError("Ct non hai trovato nessuna comunicazione", 404))
    }

    res.json({ comunicazione: comunicazione.toObject({ getters: true }) })
}

// const getComunicazioniByTagId = async

const createComunicazione = async (req, res, next) => {
    const { titolo, sottotitolo, paragrafo, immagine, creator } = req.body

    const createdComunicazione = new Comunicazione({
        titolo,
        sottotitolo,
        paragrafo,
        immagine,
        creator,
    })
    try {
        await createdComunicazione.save();
    } catch (err) {
        const error = new HttpError("Errore nel salvataggio della comunicazione, riprovare.", 500)
        return next(error)
    }

    res.status(201).json({ comunicazione: createdComunicazione })
}

exports.getComunicazioni = getComunicazioni
exports.getComunicazioniById = getComunicazioniById
exports.createComunicazione = createComunicazione
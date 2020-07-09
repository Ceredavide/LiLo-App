const HttpError = require("../models/http-error")

const Comunicazione = require("../models/Comunicazione")

const getComunicazioni = async (req, res, next) => {

    let comunicazioni

    try {
        comunicazioni = await Comunicazione.find()
    } catch (err) {
        return next(new HttpError("Errore nel reperire la lista delle comunicazioni, riprovare.", 500))
    }

    res.status(200).json({ comunicazioni: comunicazioni.map(item => item.toObject({ getters: true })) })

}

const getComunicazioniById = async (req, res, next) => {

    const id = req.params.id

    let comunicazione;

    try {
        comunicazione = await Comunicazione.findById(id)
    } catch (err) {
        return next(new HttpError("Errore nella ricerca della comunicazione, riprovare.", 500))
    }

    if (!comunicazione || comunicazione.length === 0) {
        return next(new HttpError("Ct non hai trovato nessuna comunicazione", 404))
    }

    res.status(200).json({ comunicazione: comunicazione.toObject({ getters: true }) })
}

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
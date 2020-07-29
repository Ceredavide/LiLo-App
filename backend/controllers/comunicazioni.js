const fs = require("fs")

const HttpError = require("../models/http-error")
const Comunicazione = require("../models/Comunicazione")
const User = require("../models/User")

//
//GET
//
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

//
//POST
//
const createComunicazione = async (req, res, next) => {

    const { titolo, sottotitolo, paragrafo, creator } = req.body

    let user;

    try {
        user = await User.findById(creator)
    } catch (err) {
        return next(new HttpError("Id utente non valido, riprovare.", 500))
    }

    if (!user) {
        return next(new HttpError("Id utente non valido, riprovare."))
    }

    const createdComunicazione = new Comunicazione({
        titolo,
        sottotitolo,
        paragrafo,
        immagine: req.file.path,
        creator,
    })

    try {
        await createdComunicazione.save();
    } catch (err) {
        return next(new HttpError("Errore nel salvataggio della comunicazione, riprovare.", 500))
    }

    res.status(201).json({ comunicazione: createdComunicazione })
}

//
//PATCH
//
const updateComunicazione = async (req, res, next) => {

    const id = req.params.id

    const {
        titolo,
        sottotitolo,
        paragrafo } = req.body

    let comunicazione;

    try {
        comunicazione = await Comunicazione.findById(id)
    } catch (err) {
        return next(new HttpError("Errore nella modifica della comunicazione, riprovare.", 500))
    }

    comunicazione.titolo = titolo
    comunicazione.sottotitolo = sottotitolo
    comunicazione.paragrafo = paragrafo

    try {
        await comunicazione.save()
    } catch (err) {
        return next(new HttpError("Errore nel salvataggio della comunicazione modificata.", 500))
    }

    res.status(200).json({ comunicazione: comunicazione.toObject({ getters: true }) })
}

//
//DELETE
//
const deleteComunicazione = async (req, res, next) => {
    const id = req.params.id

    let comunicazione

    try {
        comunicazione = await Comunicazione.findById(id)
    } catch (err) {
        return next(new HttpError("Errore nella eliminazione della comunicazione, riprovare.", 500))
    }

    const imagePath = comunicazione.immagine

    try {
        await comunicazione.remove()
    } catch (err) {
        return next(new HttpError("Errore nella eliminazione della comunicazione, riprovare.", 500))
    }

    fs.unlink(imagePath, err => console.log(err))

    res.status(200).json({ id: comunicazione.toObject({ getters: true }).id })
}

exports.getComunicazioni = getComunicazioni
exports.getComunicazioniById = getComunicazioniById
exports.createComunicazione = createComunicazione
exports.updateComunicazione = updateComunicazione
exports.deleteComunicazione = deleteComunicazione
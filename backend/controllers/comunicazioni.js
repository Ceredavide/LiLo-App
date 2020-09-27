const fs = require("fs")

const HttpError = require("../models/HttpError")
const Comunicazione = require("../models/Comunicazione")
const User = require("../models/User")

//TODO: Aggiungere ruoli per modifica e eliminazione comunicazioni

//
//GET
//
const getComunicazioni = async (req, res, next) => {

    let comunicazioni

    try {
        comunicazioni = await Comunicazione.find({}, '-editors').populate('tags')
    } catch (err) {
        return next(new HttpError("Errore nel reperire la lista delle comunicazioni, riprovare.", 500))
    }

    res.status(200).json({ comunicazioni })
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

    res.status(200).json({ comunicazione })
}

const getComunicazioniByTagId = async (req, res, next) => {

    const id = req.params.id

    let comunicazioni

    try {
        comunicazioni = await Comunicazione.find({ tags: { $in: [id] } }, '-editors').populate('tags')
    } catch (err) {
        return next(new HttpError("Errore nel reperire la lista delle comunicazioni, riprovare.", 500))
    }

    res.status(200).json({ comunicazioni })

}

//
//POST
//
const createComunicazione = async (req, res, next) => {

    const { _id: userId } = req.userData

    const {
        titolo,
        sottotitolo,
        paragrafo,
        tags
    } = req.body

    if (!req.file) {
        return next(new HttpError("Errore nel salvataggio dell' immagine, riprovare."))
    }

    let user;

    try {
        user = await User.findById(userId)
    } catch (err) {
        console.log(err)
        return next(new HttpError("Id utente non valido, riprovare.", 500))
    }

    if (!user) {
        return next(new HttpError("Id utente non valido, riprovare.", 500))
    }

    const createdComunicazione = new Comunicazione({
        titolo,
        sottotitolo,
        paragrafo,
        immagine: req.file.path,
        tags,
        editors: [userId]
    })

    try {
        await createdComunicazione.save();
    } catch (err) {
        return next(new HttpError("Errore nel salvataggio della comunicazione, riprovare.", 500))
    }

    let comunicazioneView = await createdComunicazione.execPopulate('tags')

    res.status(201).json({
        comunicazione: comunicazioneView
    })
}

//
//PATCH
//
const updateComunicazione = async (req, res, next) => {

    const { _id: userId } = req.userData

    const {
        titolo,
        sottotitolo,
        paragrafo,
        tags
    } = req.body

    let comunicazione;

    try {
        comunicazione = await Comunicazione.findById(userId)
    } catch (err) {
        return next(new HttpError("Errore nella modifica della comunicazione, riprovare.", 500))
    }

    comunicazione.titolo = titolo
    comunicazione.sottotitolo = sottotitolo
    comunicazione.paragrafo = paragrafo
    comunicazione.tags = tags
    comunicazione.editors = [...comunicazione.editors, userId]

    try {
        await comunicazione.save()
    } catch (err) {
        return next(new HttpError("Errore nel salvataggio della comunicazione modificata.", 500))
    }

    res.status(200).json({ comunicazione: comunicazione.populate() })
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
        return next(new HttpError("Errore nella eliminazione della comunicazione, id non valido.", 500))
    }

    if (!comunicazione) {
        return next(new HttpError("Non è stata trovata una comunicazione con questo id, riprovare.", 404))
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
exports.getComunicazioniByTagId = getComunicazioniByTagId

exports.createComunicazione = createComunicazione

exports.updateComunicazione = updateComunicazione

exports.deleteComunicazione = deleteComunicazione
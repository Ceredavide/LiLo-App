const mongoose = require("mongoose")

const HttpError = require("../models/http-error")
const Proposta = require("../models/Proposta")
const User = require("../models/User")

//
//GET
//
const getProposte = async (req, res, next) => {

    let proposte;

    try {
        proposte = await Proposta.find();
    } catch (err) {
        return next(new HttpError("Errore nel reperire le proposte, riprova più tardi", 500))
    }

    res.status(200).json({ proposte: proposte.map(proposta => proposta.toObject({ getters: true })) })
}

const getPropostaById = async (req, res, next) => {
    const id = req.params.id

    let proposta;

    try {
        proposta = await Proposta.findById(id)
    } catch (err) {
        return next(new HttpError("Qualcosa è andato storto, riprovare."))
    }

    if (!proposta) {
        return next(new HttpError("Non è stata trovata nessuna proposta con questo Id, riprovare.", 404))
    }

    res.status(200).json({ proposta: proposta.toObject({ getters: true }) })
}

//
//POST
//
const createProposta = async (req, res, next) => {

    const { userId } = req.userData

    const {
        nome,
        descrizione,
        numeroPartecipantiMax,
        richieste
    } = req.body

    let user;

    try {
        user = await User.findById(creator)
    } catch (err) {
        return next(new HttpError("Id utente non valido, riprovare.", 500))
    }

    if (!user) {
        return next(new HttpError("Utente con questo id inesistente, riprovare."))
    }

    const createdProposta = new Proposta({
        nome,
        descrizione,
        numeroPartecipantiMax,
        richieste,
        creator: userId
    })

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdProposta.save({ session: sess });
        user.proposte.push(createdProposta);
        await user.save({ session: sess })
        await sess.commitTransaction()
    } catch (err) {
        return next(new HttpError("Errore nel salvataggio della proposta, riprovare.", 500))
    }

    res.status(201).json({ proposta: createdProposta })
}

//
//PATCH
//
const updateProposta = async (req, res, next) => {

    const id = req.params.id

    const { userId } = req.userData

    const {
        nome,
        descrizione,
        numeroPartecipantiMax,
        richieste
    } = req.body

    let proposta;

    try {
        proposta = await Proposta.findById(id)
    } catch (err) {
        return next(new HttpError("Errore nella modifica della comunicazione, riprovare.", 500))
    }

    if (userId !== proposta.creator.toString()) {
        return next(new HttpError("Non essendo il creatore della proposta, non puoi modificarla.", 401))
    }

    proposta.nome = nome
    proposta.descrizione = descrizione
    proposta.numeroPartecipantiMax = numeroPartecipantiMax
    proposta.richieste = richieste

    try {
        await proposta.save()
    } catch (err) {
        return next(new HttpError("Errore nel salvataggio della comunicazione modificata.", 500))
    }
}

//
//DELETE
//
const deleteProposta = async (req, res, next) => {

    const id = req.params.id

    const { userId } = req.userData

    let proposta

    try {
        proposta = await Proposta.findById(id).populate("creator")
    } catch (err) {
        return next(new HttpError("Errore nella eliminazione della proposta, riprovare.", 500))
    }

    if (!proposta) {
        return next(new HttpError("Non è stata trovata nessuna proposta con questo Id.", 404))
    }

    if (userId !== proposta.creator.id) {
        return next(new HttpError("Non essendo il creatore della proposta, non puoi eliminarla.", 401))
    }

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await proposta.remove({ sesssion: sess });
        proposta.creator.proposte.pull(proposta);
        await proposta.creator.save({ session: sess })
        await sess.commitTransaction()
    } catch (err) {
        return next(new HttpError("Errore nella eliminazione della proposta, riprovare.", 500))
    }

    res.status(200).json({ id: proposta.toObject({ getters: true }).id })
}


exports.getProposte = getProposte
exports.getPropostaById = getPropostaById
exports.createProposta = createProposta
exports.updateProposta = updateProposta
exports.deleteProposta = deleteProposta
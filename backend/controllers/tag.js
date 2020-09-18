const HttpError = require("../models/HttpError")
const Tag = require("../models/Tag")

//
//GET
//
const getTags = async (req, res, next) => {

    let tags;

    try {
        tags = await Tag.find({},"-createdAt -updatedAt -__v");
    } catch (err) {
        return next(new HttpError("Errore nel reperire le proposte, riprova più tardi", 500))
    }

    res.status(200).json({ tags })
}

//
//POST
//
const createTag = async (req, res, next) => {

    const {
        nome,
        iconName,
        colore
    } = req.body

    const createdTag = new Tag({
        nome,
        iconName,
        colore,
    })

    try {
        await createdTag.save();
    } catch (err) {
        console.log(err)
        return next(new HttpError("Errore nel salvataggio del tag, riprovare.", 500))
    }

    res.status(201).json({ tag: createdTag })
}

//
//PATCH
//
const updateTag = async (req, res, next) => {

    const id = req.params.id

    const {
        nome,
        iconName,
        colore
    } = req.body

    let tag;

    try {
        tag = await Tag.findById(id)
    } catch (err) {
        return next(new HttpError("Errore nella modifica del tag, riprovare.", 500))
    }

    tag.nome = nome
    tag.iconName = iconName
    tag.colore = colore

    try {
        await tag.save()
    } catch (err) {
        return next(new HttpError("Errore nel salvataggio del tag modificato.", 500))
    }
}

//
//DELETE
//
const deleteTag = async (req, res, next) => {

    const id = req.params.id

    let tag

    try {
        tag = await Tag.findById(id)
    } catch (err) {
        return next(new HttpError("Errore nella eliminazione del tag, riprovare.", 500))
    }

    if (!proposta) {
        return next(new HttpError("Non è stata trovato nessun tag con questo Id.", 404))
    }

    try {
        await tag.remove();
    } catch (err) {
        return next(new HttpError("Errore nella eliminazione del tag, riprovare.", 500))
    }

    res.status(200).json({ id: tag.toObject({ getters: true }).id })
}

exports.getTags = getTags
exports.createTag = createTag
exports.updateTag = updateTag
exports.deleteTag = deleteTag
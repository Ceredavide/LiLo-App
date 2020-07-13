const moongose = require("mongoose")

const { Schema } = moongose

const propostaSchema = new Schema({
    nome: { type: String, required: true },
    descrizione: { type: String, required: true },
    numeroPartecipantiMax: { type: Number, required: true, min: 5, max: 200 },
    richieste: { type: String, default: "" },
    creator: { type: moongose.Types.ObjectId, required: true, ref: "User" },
}, {
    timestamps: true
})


module.exports = moongose.model("Proposta", propostaSchema)
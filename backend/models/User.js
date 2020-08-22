const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const { Schema } = mongoose

const userSchema = new Schema({
    nome: { type: String, required: true },
    cognome: { type: String, required: true },
    classe: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    activated: { type: Boolean, required: true },
    role: { type: String, required: true },
    proposte: [{ type: mongoose.Types.ObjectId, required: true, ref: "Proposta" }]
}, {
    timestamps: true
})

// cosi non si puo registrare due utenti con la email uguale
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("User", userSchema)
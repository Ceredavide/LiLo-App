const moongose = require("mongoose")

const { Schema } = moongose

const tagSchema = new Schema({
    nome: { type: String, required: true },
    iconName: { type: String, required: true },
    colore: { type: String, required: true }
}, {
    timestamps: true
})


module.exports = moongose.model("Tag", tagSchema)
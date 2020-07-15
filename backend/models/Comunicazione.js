const moongose = require("mongoose")

const { Schema } = moongose

const comunicazioneSchema = new Schema({
    titolo: { type: String, required: true },
    sottotitolo: { type: String, required: true },
    paragrafo: { type: String, required: true },
    immagine: { type: String, required: true }
}, {
    timestamps: true
})


module.exports = moongose.model("Comunicazione", comunicazioneSchema)
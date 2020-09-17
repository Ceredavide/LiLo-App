const multer = require("multer")
const { v4: uuid } = require("uuid")

const MIME_TYPES_MAP = {
    "image/png": "png",
    "image/gif": "gif",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg"
}

const fileUpload = multer({
    limits: 500000,
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads/images")
        },
        // riconosce l'estensione dell'immagine
        filename: (req, file, cb) => {
            const ext = MIME_TYPES_MAP[file.mimetype];
            cb(null, uuid() + "." + ext)
        }
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPES_MAP[file.mimetype]

        let error = isValid ? null : new Error("Tipo di file non supportato.")

        cb(error, isValid)
    }
})

module.exports = fileUpload
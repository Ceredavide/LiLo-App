const jwt = require("jsonwebtoken")

const HttpError = require("../models/HttpError")
const User = require("../models/User")

module.exports = async (req, res, next) => {

    let decodedToken;

    let user;

    // Decoda il token con la private key.

    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            throw new Error("Token non valido.")
        }

        decodedToken = jwt.verify(token, process.env.JWT_KEY_AUTH)

    } catch (err) {
        return next(new HttpError("Autenticazione Fallita.", 401))
    }

    // Con l'id ricavato dal token va a cercare l'utente che sta effettuando la richiesta.

    try {
        user = await User.findById(decodedToken.id)
    } catch (err) {
        return next(new HttpError("Autenticazione fallita, il token non è valido."))
    }

    // nel caso non trova nessun utente ritorna un errore.

    if (!user) {
        return next(new HttpError("Autenticazione fallita, il token non è valido."))
    }

    req.userData = user;

    return next()
}
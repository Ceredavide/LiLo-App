const jwt = require("jsonwebtoken")

const HttpError = require("../models/http-error")

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            throw new Error("Autenticazione Fallita.")
        }

        const decodedToken = jwt.verify(token, "Y4rb1i@&r4#r")

        req.userData = { userId: decodedToken.id }

        next();

    } catch (err) {
        return next(new HttpError("Autenticazione Fallita.", 401))
    }

}
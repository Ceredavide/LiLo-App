const HttpError = require("../models/HttpError")

module.exports = roles => {

    return (req, res, next) => {

        const userRole = req.userData.role

        if (roles.findIndex(role => role === userRole) === -1) {
            return new HttpError("Non hai i permessi per eseguire questa API.", 403)
        }

        next()
    }
}
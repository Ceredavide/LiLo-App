const User = require("../models/User")
const HttpError = require("../models/http-error")

const getUsers = async (req, res, next) => {

    let users

    try {
        users = await User.find({}, '-password')
    } catch (err) {
        return next(new HttpError("Qualcosa è andato storto, riprova più tardi."))
    }

    res.status(200).json({ users: users.map(user => user.toObject({ getters: true })) })
}

const signup = async (req, res, next) => {

    const { nome, cognome, classe, email, password } = req.body

    let existingUser

    // controllo se esiste già un utente con quella password
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        return next(new HttpError("Registrazione fallita, riprova più tardi.", 500))
    }

    if (existingUser) {
        return next(new HttpError("É già presente un utente con la e-mail inserita.", 422))
    }

    const newUser = new User({
        nome,
        cognome,
        classe,
        email,
        password,
        proposte: [],
        comunicazioni: []
    })

    try {
        await newUser.save()
    } catch (err) {
        console.log(err)
        return next(new HttpError("Registrazione fallita, riprova più tardi.", 500))
    }

    res.status(200).json({ user: newUser.toObject({ getters: true }) })
}

const login = async (req, res, next) => {
    const { email, password } = req.body

    let existingUser

    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        return next(new HttpError("Login fallito, riprova più tardi.", 500))
    }

    if (!existingUser) {
        return next(new HttpError("User not found.", 401))
    }
    if (existingUser.password !== password) {
        return next(new HttpError("Wrong password, try again.", 401))
    }

    res.status(200).json({ message: "Succesfully logged in!" })
}

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
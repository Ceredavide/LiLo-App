const { v4: uuid } = require("uuid")

const HttpError = require("../models/http-error")

const DUMMY_USERS = []

const getUsers = (req, res, next) => {
    res.status(200).json({ users: DUMMY_USERS })
}

const signup = (req, res, next) => {
    const { name, email, password } = req.body

    const user = DUMMY_USERS.find(u => u.email === email)

    if (user) {
        throw new HttpError("User with this email already exists.", 422)
    }

    const newUser = {
        id: uuid(),
        name,
        email,
        password
    }

    DUMMY_USERS.push(newUser)

    res.status(200).json({ user: newUser })
}

const login = (req, res, next) => {
    const { email, password } = req.body

    const selectedUser = DUMMY_USERS.find(u => u.email === email)

    if (!selectedUser) {
        throw new HttpError("User not found.", 401)
    }
    if (selectedUser.password !== password) {
        throw new HttpError("Wrong password, try again.", 401)
    }

    res.status(200).json({ message: "Succesfully logged in!" })
}

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
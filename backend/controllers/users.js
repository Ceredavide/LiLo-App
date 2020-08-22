const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const User = require("../models/User")
const HttpError = require("../models/HttpError")

const ROLES = require("../constants/ROLES")

const renderEmailBody = require('../utils/renderHtmlEmail')

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

    let hashedPassword;

    try {
        hashedPassword = await bcrypt.hash(password, 12)
    } catch (err) {
        return next(new HttpError("Registrazione fallita, riprova più tardi.", 500))
    }

    const newUser = new User({
        nome,
        cognome,
        classe,
        email,
        role: ROLES.STUDENT,
        password: hashedPassword,
        activated: false,
        proposte: [],
    })

    try {
        await newUser.save()
    } catch (err) {
        return next(new HttpError("Registrazione fallita, riprova più tardi.", 500))
    }

    let transport = nodemailer.createTransport({
            host: 'smtp.office365.com',
            secureConnection: false,
            port: 587,
            requireTLS: true,//this parameter solved problem for me
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            }
        });
        // service: "Outlook365",
        // auth: {
        //     user: process.env.EMAIL,
        //     pass: process.env.PASSWORD
        // }
    // })

    let token;

    try {
        token = await jwt.sign({ id: newUser.id }, process.env.JWT_KEY_EMAIL, { expiresIn: "1d" })
    } catch (err) {
        console.log(err)
        return next(new HttpError("Registrazione fallita, riprova più tardi.", 500))
    }

    const message = {
        from: process.env.EMAIL, // Sender address
        to: newUser.email,         // List of recipients
        subject: 'Conferma la tua email', // Subject line
        html: renderEmailBody(newUser.nome, newUser.cognome, process.env.BACKEND_URL + `/users//email-activation/${token}`, process.env.EMAIL) // Plain text body
    };

    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });

    res.status(201).json({ user: newUser.toObject({ getters: true }) })
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

    let isValidPassword;

    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password)
    } catch (err) {
        return next(new HttpError("Login fallito, riprova più tardi.", 500))
    }

    if (!isValidPassword) {
        return next(new HttpError("Wrong password, try again.", 401))
    }

    delete existingUser.password

    let token;

    try {
        token = await jwt.sign({ id: existingUser.id }, process.env.JWT_KEY_AUTH, { expiresIn: "310d" })
    } catch (err) {
        return next(new HttpError("Login fallito, riprova più tardi.", 500))
    }

    res.status(200).json({ user: existingUser.toObject({ getters: true }), token: token })
}

//TODO: fare API eliminazione utente

// const deleteUser = async (req, res, next) => {

//     const id = req.params.id

//     let user;

//     try {
//         user = await User.findById(id)
//     } catch (err) {
//         return next(new HttpError("Errore nella eliminazione del utente, id non valido.", 500))
//     }

//     if (!user) {
//         return next(new HttpError("Non è stata trovato un utente con questo id, riprovare.", 404))
//     }

//     try {
//         await user.remove()
//     } catch (err) {

//     }


// }

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
// exports.deleteUser = deleteUser
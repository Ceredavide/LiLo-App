const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const User = require("../models/User")
const HttpError = require("../models/HttpError")

const ROLES = require("../constants/ROLES")

const renderEmailBody = require('../utils/renderHtmlEmail');

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
        activated: true,
        proposte: [],
    })

    try {
        await newUser.save()
    } catch (err) {
        return next(new HttpError("Registrazione fallita, riprova più tardi.", 500))
    }

    // console.log(process.env.EMAIL, process.env.PASSWORD)

    // let transport = nodemailer.createTransport({
    //     // host: 'smtp.office365.com',
    //     // port: '587',
    //     // auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
    //     // secureConnection: false,
    //     // requireTLS: false,
    //     // tls: {
    //     //     ciphers: 'SSLv3',
    //     //     rejectUnauthorized: false
    //     // }
    //     host: "smtp.office365.com", // hostname
    //     secure: false, // TLS requires secureConnection to be false
    //     port: 587, // port for secure SMTP
    //     auth: {
    //         user: process.env.EMAIL,
    //         pass: process.env.PASSWORD
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //         ciphers:'SSLv3'
    //     }
    // });
    //     // host: 'smtp.office365.com',
    //     // secureConnection: false,
    //     // port: 587,
    //     // auth: {
    //     //     user: process.env.EMAIL,
    //     //     pass: process.env.PASSWORD
    //     // }
    //     // ,
    //     // tls: {
    //     //     ciphers: 'SSLv3'
    //     // }
    // // });


    // // verifico connessione con il server
    // transport.verify(function (error, success) {
    //     if (error) {
    //         console.log(error);
    //         try {
    //             newUser.remove()
    //             return next(new HttpError("Registrazione fallita, riprova più tardi.", 500))
    //         } catch (err) {
    //             throw new Error("Registrazione fallita, riprova più tardi.")
    //         } 
    //     }
    //     if (success) {
    //         console.log(success)
    //     }
    // });

    // let token;

    // try {
    //     token = await jwt.sign({ id: newUser.id }, process.env.JWT_KEY_EMAIL, { expiresIn: "300d" })
    // } catch (err) {
    //     console.log(err)
    //     return next(new HttpError("Registrazione fallita, riprova più tardi.", 500))
    // }

    // const message = {
    //     from: process.env.EMAIL, // Sender address
    //     to: newUser.email,         // List of recipients
    //     subject: 'Conferma la tua email', // Subject line
    //     html: renderEmailBody(newUser.nome, newUser.cognome, process.env.BACKEND_URL + `/users//email-activation/${token}`, process.env.EMAIL) // Plain text body
    // };

    // transport.sendMail(message, function (err, info) {
    //     if (err) {
    //         console.log(err)

    //     } else {
    //         console.log(info);
    //     }
    // });

    // send the message and get a callback with an error or details of the message that was sent
    // client.send(message, (err, message) => {
    //     console.log(err || message);
    // });

    res.status(201).json({ user: newUser.toObject({ getters: true }) })
}

const login = async (req, res, next) => {
    const { email, password } = req.body

    let existingUser

    try {
        existingUser = await User.findOne({ email }).select("-createdAt -updatedAt -__v")
    } catch (err) {
        return next(new HttpError("Login fallito, riprova più tardi.", 500))
    }

    if (!existingUser) {
        return next(new HttpError("L' email é sbagliata, riprovare.", 401))
    }

    if (!existingUser.activated) {
        return next(new HttpError('Devi prima confermare la tua mail, controlla la tua posta elettronica.', 403))
    }

    let isValidPassword;

    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password)
    } catch (err) {
        return next(new HttpError("Login fallito, riprova più tardi.", 500))
    }

    if (!isValidPassword) {
        return next(new HttpError("La password è sbagliata, riprovare.", 401))
    }

    let token;

    try {
        token = await jwt.sign({ id: existingUser.id }, process.env.JWT_KEY_AUTH, { expiresIn: "310d" })
    } catch (err) {
        return next(new HttpError("Login fallito, riprova più tardi.", 500))
    }

    res.status(200).json({ user: existingUser, token: token })
}

const activateUser = async (req, res, next) => {

    const jwt = req.params.jwt

    let decodedToken;

    let user;

    // Decoda il token con la private key.

    try {
        decodedToken = jwt.verify(jwt, process.env.JWT_KEY_EMAIL)
    } catch (err) {
        return next(new HttpError("Attivazione utente fallita.", 401))
    }

    try {
        user = User.findById(decodedToken.id)
    } catch (err) {
        return next(new HttpError('Attivazione utente fallita', 500))
    }

    user.activated = true

    try {
        user.save()
    } catch (err) {
        return next(new HttpError('Attivazione utente fallita', 500))
    }

    res.status(200).json({ message: 'Attivazione effettuata con successo!' })

}

const addNotificationToken = async (req, res, next) => {

    const { notificationToken } = req.body

    const { _id: userId } = req.userData

    let user;

    try {
        user = await User.findById(userId)
    } catch (error) {
        return next(new HttpError("Qualcosa è andato storto, riprovare.", 500))
    }

    if (!user) {
        return next(new HttpError("Utente non trovato.", 401))
    }

    user.notificationToken = notificationToken

    try {
        await user.save();
    } catch (error) {
        return next(new HttpError("Errore nel salvataggio del utente, riprovare."))
    }

    res.status(200).json({ notificationToken })

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

exports.addNotificationToken = addNotificationToken;
// exports.deleteUser = deleteUser
exports.activateUser = activateUser
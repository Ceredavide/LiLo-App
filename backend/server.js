const express = require("express")
const cors = require('cors')
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const HttpError = require("./models/HttpError")

// importazione verifica autenticazione
const checkAuth = require("./middlewares/checkAuth")

// importazione gestore errori
const errorHandler = require("./controllers/error")

// importazioni routes api
const comunicazioniRouter = require("./routes/comunicazioni")
const proposteRouter = require("./routes/proposte")
const usersRouter = require("./routes/user")

// start env variables
require('dotenv').config()

// inizializzo app
const app = express();

// app.use(cors())

// utilizzo parser che fa in modo che le risposte siano JSON
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// settato header response
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next()
})

// utilizzo API senza auth
app.use('/api/users', usersRouter)

// utilizzo middleware checkLogin
app.use(checkAuth)

// rende disponibile l'accesso statico alle immagini
app.use('uploads/images', express.static(path.join("uploads", "images")))

// utilizzo API routes 
app.use('/api/comunicazioni', comunicazioniRouter)
app.use('/api/proposte', proposteRouter)

// route chiamata se si prova ad andare in un url senza routes
app.use((req, res, next) => {
    throw new HttpError("Could not find this route.", 404)
})

// utilizzo gestore errori
app.use(errorHandler)

mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        replicaSet: "rs"
    })
    .then(() => {
        app.listen(process.env.PORT)
        console.log(`server running on port :${process.env.PORT}`)
    })
    .catch(err => console.log(err))

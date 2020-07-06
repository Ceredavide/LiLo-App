const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const HttpError = require("./models/http-error")

// importazione gestore errori
const errorHandler = require("./controllers/error")

// importazioni routes api
const comunicazioniRouter = require("./routes/comunicazioni")
const proposteRouter = require("./routes/proposte")
const usersRouter = require("./routes/user")

// richiamo express
const app = express();

// utilizzo parser che fa in modo che le risposte siano JSON
app.use(bodyParser.json())

// utilizzo API routes 
app.use('/api/comunicazioni', comunicazioniRouter)
app.use('/api/proposte', proposteRouter)
app.use('/api/users', usersRouter)

// route chiamata se si prova ad andare in un url senza routes
app.use((req, res, next) => {
    throw new HttpError("Could not find this route.", 404)
})

// utilizzo gestore errori
app.use(errorHandler)

mongoose.connect("mongodb://localhost:27017/ProvaLiLo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000))
    .catch(err => console.log(err))
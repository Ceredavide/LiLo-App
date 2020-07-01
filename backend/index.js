const express = require("express")
const bodyParser = require("body-parser")

const comunicazioniRouter = require("./routes/comunicazioni")
const proposteRouter = require("./routes/proposte")

const app = express();

app.use(bodyParser.json())

app.use('/api/comunicazioni', comunicazioniRouter)
app.use('/api/proposte', proposteRouter)

// aiuta a gestire gli errori
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500)
    res.json(error.message || "An unkown error ocurred.")
})

app.listen(5000)
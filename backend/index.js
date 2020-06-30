const express = require("express")
const bodyParser = require("body-parser")

const comunicazioniRouter = require("./routes/comunicazioni")
const proposteRouter = require("./routes/proposte")

const app = express();

app.use('/api/comunicazioni', comunicazioniRouter)
app.use('/api/proposte', proposteRouter)

app.listen(5000)
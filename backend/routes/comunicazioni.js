const express = require("express")

const comunicazioniController = require("../controllers/comunicazioni");

const {
    getComunicazioni,
    getComunicazioniById,
    createComunicazione
} = comunicazioniController

const router = express.Router();

router.get('/', getComunicazioni);

router.get('/:id', getComunicazioniById)

router.post('/', createComunicazione)

module.exports = router;
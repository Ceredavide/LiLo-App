const express = require("express")

const comunicazioniController = require("../controllers/comunicazioni");

const {
    getComunicazioni,
    getComunicazioniById,
    createComunicazione,
    updateComunicazione,
    deleteComunicazione
} = comunicazioniController

const router = express.Router();

router.get('/', getComunicazioni);

router.get('/:id', getComunicazioniById)

router.post('/', createComunicazione)

router.patch('/:id', updateComunicazione)

router.delete('/:id', deleteComunicazione)

module.exports = router;
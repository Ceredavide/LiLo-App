const express = require("express")

const { getComunicazioni, getComunicazioniById } = require("../controllers/comunicazioni");

const router = express.Router();

router.get('/', getComunicazioni);

router.get('/:id', getComunicazioniById)

module.exports = router;
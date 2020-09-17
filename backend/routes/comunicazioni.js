const express = require("express")

const comunicazioniController = require("../controllers/comunicazioni");

const checkRole = require("../middlewares/checkRole")

const fileUpload = require("../middlewares/file-upload")

const ROLES = require("../constants/ROLES")

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

router.post('/', checkRole([ROLES.ADMIN, ROLES.EDITOR]), fileUpload.single("image"), createComunicazione)

router.patch('/:id', updateComunicazione)

router.delete('/:id', deleteComunicazione)

module.exports = router;
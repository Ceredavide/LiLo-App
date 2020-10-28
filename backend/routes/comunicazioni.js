const express = require("express")

const comunicazioniController = require("../controllers/comunicazioni");

const checkRole = require("../middlewares/checkRole")

const fileUpload = require("../middlewares/file-upload")

const ROLES = require("../constants/ROLES")

const {
    getComunicazioni,
    getComunicazioniById,
    getComunicazioniByTagId,
    createComunicazione,
    updateComunicazione,
    deleteComunicazione
} = comunicazioniController

const router = express.Router();

router.get('/', getComunicazioni);

router.get('/:id', getComunicazioniById)

router.get('/tag/:id', getComunicazioniByTagId)

router.post('/', checkRole([ROLES.ADMIN, ROLES.EDITOR]), fileUpload.single("image"), createComunicazione)

router.put('/:id', checkRole([ROLES.ADMIN, ROLES.EDITOR]), fileUpload.single("image"), updateComunicazione)

router.delete('/:id', deleteComunicazione)

module.exports = router;
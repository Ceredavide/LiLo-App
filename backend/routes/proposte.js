const express = require("express")

const proposteController = require("../controllers/proposte")

const checkAuth = require("../middlewares/auth-check")

const { getProposte, getPropostaById, createProposta } = proposteController

const router = express.Router();

router.use(checkAuth)

router.get('/', getProposte);

router.get('/:id', getPropostaById);

router.post('/', createProposta)

module.exports = router;
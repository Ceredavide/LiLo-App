const express = require("express")

const proposteController = require("../controllers/proposte")

const { getProposte, getPropostaById, createProposta } = proposteController

const router = express.Router();

router.get('/', getProposte);

router.get('/:id', getPropostaById);

router.post('/', createProposta)

module.exports = router;
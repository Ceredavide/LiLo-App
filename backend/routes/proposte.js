const express = require("express")

const proposteConstroller = require("../controllers/proposte")

const { getProposte, getPropostaById, createProposta } = proposteConstroller

const router = express.Router();

router.get('/', getProposte);

router.get('/:id', getPropostaById);

router.post('/', createProposta)

module.exports = router;
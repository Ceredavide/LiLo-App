const express = require("express")

const usersController = require("../controllers/users")

const { getUsers, signup, login } = usersController

const router = express.Router()

router.get('/', getUsers)

router.post('/signup', signup)

router.post('/login', login)

module.exports = router
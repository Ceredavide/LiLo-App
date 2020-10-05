const express = require("express")

const usersController = require("../controllers/users")

const checkRole = require("../middlewares/checkRole")

const ROLES = require("../constants/ROLES")

const { signup, login } = usersController

const router = express.Router()

// router.get('/', checkAuth, checkRole([ROLES.ADMIN]), getUsers)

router.post('/signup', signup)

router.post('/login', login)

module.exports = router
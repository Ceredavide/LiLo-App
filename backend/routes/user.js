const express = require("express")

const usersController = require("../controllers/users")

const checkAuth = require('../middlewares/checkAuth')
// const checkRole = require("../middlewares/checkRole")

// const ROLES = require("../constants/ROLES")

const { signup, login, addNotificationToken } = usersController

const router = express.Router()

// router.get('/', checkAuth, checkRole([ROLES.ADMIN]), getUsers)

router.post('/signup', signup)

router.post('/login', login)

router.put('/notification-token', checkAuth, addNotificationToken)

module.exports = router
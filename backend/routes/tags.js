const express = require("express")

const tagsController = require("../controllers/tag")

const checkRole = require("../middlewares/checkRole")

const ROLES = require("../constants/ROLES")

const { getTags, createTag, updateTag, deleteTag } = tagsController

const router = express.Router();

router.get('/', getTags);

router.post('/', createTag, checkRole([ROLES.ADMIN]))

router.put('/:id', updateTag, checkRole([ROLES.ADMIN]));

router.delete('/:id', deleteTag, checkRole([ROLES.ADMIN]))

module.exports = router;
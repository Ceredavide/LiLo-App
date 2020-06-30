const express = require("express")

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Bella Mate")
    res.json({ message: "sembra funzioni" })
});

module.exports = router;
const router = require("express").Router();
const livreController = require("../controllers/livre.controller")

router.post("/add", livreController.addLivre)

module.exports = router
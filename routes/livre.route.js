const router = require("express").Router();
const livreController = require("../controllers/livre.controller")

router.post("/add", livreController.addLivre)
router.delete("/drop", livreController.dropLivre)
router.post("/empreint", livreController.empreinterLivre)

module.exports = router
const router = require("express").Router();
const livreController = require("../controllers/livre.controller")

router.post("/add", livreController.addLivre)
router.delete("/drop", livreController.dropLivre)
router.post("/empreint", livreController.empreinterLivre)
router.post("/reserver", livreController.reserverLivre)
router.put("/rendre", livreController.removeEmpreint)
router.put("/removeReserve", livreController.removeReserve)
router.get("/affichage", livreController.affichage)


module.exports = router
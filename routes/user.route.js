const router = require("express").Router();
const { inscription, login, logout } = require("../controllers/auth.controller")
const userController = require("../controllers/user.controller")


// auth
router.post("/register", inscription)
router.post("/login", login)
router.post("/logout", logout)


// gestion user
router.delete("/drop", userController.dropUser)



module.exports = router
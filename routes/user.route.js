const router = require("express").Router();
const { inscription, login, logout } = require("../controllers/auth.controller")


// auth
router.post("/register", inscription)
router.post("/login", login)
router.post("/logout", logout)


module.exports = router
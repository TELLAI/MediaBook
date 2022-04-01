const router = require("express").Router();
const { inscription, login } = require("../controllers/auth.controller")


// auth
router.post("/register", inscription)
router.post("/login", login)


module.exports = router
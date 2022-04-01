const userModel = require("../models/users.model")
const jwt = require("jsonwebtoken")
const maxAge = 3 * 24 * 60 * 60 * 1000  // 3 jours pour expirer

const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {expiresIn: maxAge})
}

const inscription = async (req, res) => {

    const {name, email, password} = req.body

    try {
        const user = await userModel.create({name, email, password})
        res.status(201).json({user : user._id})
    }catch (err){
        res.status(200).send({err})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await userModel.login(email, password)
        const token = createToken(user._id)
        res.cookie("token-jwt", token, {httpOnly: true, maxAge})
        res.status(200).json({user : token})
    }catch(err){
        res.status(201).send(err)
    }
}

const logout = async (req, res) => {
    res.cookie("token-jwt", "", {httpOnly : true, maxAge : 1})
}

module.exports = {
    inscription,
    login,
    logout,
}
const userModel = require("../models/users.model")

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
        res.status(200).json({user : user.name})
    }catch(err){
        res.status(201).send(err)
    }
}

module.exports = {
    inscription,
    login,
}
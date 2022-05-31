const userModel = require("../models/users.model");


const dropUser = async (req, res) => {
    const {userId} = req.body

    try{
        const drop = await userModel.remove({_id : userId})
        res.status(201).json({"user supprimé" : userId})
    }catch(err){
        res.status(200).send(err)
    }
}

const addEmpreint = async (req, res) => {
    const {userId, livreId, livreNom, dateEmpreint, dateRendre} = req.body

    try{
        const empreint = await userModel.findByIdAndUpdate({ _id : userId }, { $push :{
          livre_empreinte:
            { livreId, livreNom, dateEmpreint, dateRendre },
        }});

        res.status(201).send(`Empreint du livre ${livreNom} enregistré`)
    }catch(err){
        res.status(200).send(err)
    }
}

const addReserve = async (req, res) => {
    const {userId, livreId, livreNom} = req.body

    try{
        const reserve = await userModel.findByIdAndUpdate(
          { _id: userId },
          { $push: { livre_reserve : {
              livreId, livreNom
          } } }
        );

        res.status(201).send(`Le livre ${livreNom} a été empreinté.`)
    }catch(err){
        res.status(200).send(err)
    }
}

const getUsers = async (req, res) => {

    try{
        const users = await userModel.find()
        res.status(201).send(users)
    }catch(err){
        res.status(200).res.send(err)
    }
}

module.exports = {
    dropUser,
    addEmpreint,
    addReserve,
    getUsers,
}
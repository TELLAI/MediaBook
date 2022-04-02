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

module.exports = {
    dropUser,
    addEmpreint,
}
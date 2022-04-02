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

module.exports = {
    dropUser,

}
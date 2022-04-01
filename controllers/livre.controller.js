const livreModel = require("../models/livre.model")
const { modelName } = require("../models/users.model")


const addLivre = (req, res) => {
    const {nom, categorie, Description, Auteur} = req.body

    try {
        const livre = livreModel.create({nom, categorie, Description, Auteur})
        res.status(201).json({livre : livre._id})

    }catch(err) {
        res.status(200).send(err)
    }
}

module.exports = {
    addLivre,
}
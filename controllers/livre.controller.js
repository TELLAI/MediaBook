const livreModel = require("../models/livre.model")


const addLivre = async(req, res) => {
    const {nom, categorie, Description, Auteur} = req.body

    try {
        const livre = await livreModel.create({nom, categorie, Description, Auteur})
        res.status(201).json({livre : livre._id})

    }catch(err) {
        res.status(200).send(err)
    }
}

const dropLivre = async (req, res) => {
    const {livreId} = req.body

    try{
        const drop = await livreModel.remove({ _id : livreId})
        res.status(201).json({"livre supprimé" : livreId})
    }catch(err){
        res.status(200).send(err)
    }
}

const empreinterLivre = async (req, res) => {
    const { livreId, empreinteurId, empreinteurNom, dateEmpreint, dateRendre } = req.body;

    try{
        const livre = await livreModel.findOne({ _id : livreId })
        livre.Empreint.push({ empreinteurId, empreinteurNom, dateEmpreint, dateRendre })
        await livre.save()
        res.status(201).send(`livre ${livreId} empreinté par : ${empreinteurNom}`)
    
    }catch(err){
        res.status(200).send(err)
    }
}

module.exports = {
    addLivre,
    dropLivre,
    empreinterLivre,
}
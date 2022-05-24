const livreModel = require("../models/livre.model")


const addLivre = async(req, res) => {
    const {nom, categorie, Description, Auteur, photo} = req.body

    try {
        const livre = await livreModel.create({nom, categorie, Description, Auteur, photo})
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

const removeEmpreint  = async (req, res) => {
    const { livreId } = req.body

    try{
        const livre = await livreModel.findByIdAndUpdate({ _id : livreId }, {$set : { Empreint : []}})
        res.status(201).send(`Le livre ${livreId} est de nouveau disponible`)
    }catch(err){
        res.status(200).send(err)
    }
}

const reserverLivre = async (req, res) => {
    const {livreId, reserveurId, reserveurNom} = req.body

    try{
        const reserve = await livreModel.findByIdAndUpdate(
          { _id: livreId },
          { $push: { Reservation : { reserveurId, reserveurNom } } }
        );
        res.status(201).send(`Livre ${livreId} reservé par ${reserveurNom}`)
    }catch(err){
        res.status(200).send(err)
    }
}

const removeReserve = async (req, res) => {
        const { livreId } = req.body;

        try {
          const livre = await livreModel.findByIdAndUpdate(
            { _id: livreId },
            { $set: { Reservation: [] } }
          );
          res.status(201).send(`Le livre ${livreId} est de nouveau disponible`);
        } catch (err) {
          res.status(200).send(err);
        }
}

const affichage = async (req, res) => {

    try {
        const livres = await livreModel.find()
        res.status(201).json(livres)
    }catch (err){
        res.status(200).send(err)
    }
}

module.exports = {
    addLivre,
    dropLivre,
    empreinterLivre,
    reserverLivre,
    removeEmpreint,
    removeReserve,
    affichage,
}
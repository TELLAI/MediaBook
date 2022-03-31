const mongoose = require("mongoose");

const LivreSchema = new mongoose.Schema(
    {
        nom : {
            type: String,
            required: true,
            trim: true,
        },
        categorie : {
            type: [String]
        },
        Description: {
            type: String
        },
        Auteur : {
            type: String
        },
        Empreint : {
            type: [
            {
                empreinteurId: String,
                empreinteurNom: String,
                dateEmpreint: Number,
                dateRendre: Number,
            }
        ],
        },
        Reservation: {
            type : [
                {
                    reserveurId: String,
                    reserveurNom: String,
                }
            ],
        },
    },
    {
        timestamps : true,
    }
);

module.exports = moongose.model("livre", LivreSchema)
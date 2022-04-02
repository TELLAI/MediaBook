const mongoose = require("mongoose");

const livreSchema = new mongoose.Schema(
    {
        nom : {
            type: String,
            required: true,
            trim: true,
        },
        categorie : {
            type: [String],
            required: true,
        },
        Description: {
            type: String,
            required: true,
        },
        Auteur : {
            type: String,
            required: true,
        },
        Empreint : [
            {
                empreinteurId: String,
                empreinteurNom: String,
                dateEmpreint: String,
                dateRendre: String,
            }
        ],
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

module.exports = mongoose.model("livre", livreSchema)
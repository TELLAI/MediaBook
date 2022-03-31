const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail], // isEmail est une fonction de la librairie validator pour valider les email elle renvoie false ou true.
            lowercase: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6,
        },
        livre_empreinte: {
            type: [
                {
                    livreId: String,
                    livreNom: String,
                    date_empreint: Number,
                    date_rendre: Number,
                }
            ],
        },
        livre_reserve: {
            type: [
                {
                    livreId: String,
                    livreNom: String,
                }
            ],
        },
},
{
    timestamps: true,
}

);

module.exports = mongoose.model("Users", usersSchema);

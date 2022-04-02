const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
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
    livre_empreinte: [
        {
          livreId: String,
          livreNom: String,
          dateEmpreint: String,
          dateRendre: String,
        },
      ],
    livre_reserve: [
        {
          livreId: String,
          livreNom: String,
        },
      ],
    },
  {
    timestamps: true,
  }
);

// play funcion before save into display: "block"
// cette fonction nous permet d'encrypter le password avec le module bcrypt
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect email");
};


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

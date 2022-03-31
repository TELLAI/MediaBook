const express = require("express");
const app = express();
require("./config/db");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const UserModel = require("./models/users.model");

const corsOptions = {
  origin: [process.env.CLIENT_URL, "http://localhost:3000"],
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add", async (req, res) => {
    const {name, email, password} = req.body

    try {
        const user = await UserModel.create({name, email, password});
        res.status(201).json({ user: user._id});
    }
    catch(err) {
        const errors = signUpErrors(err);
        res.status(200).send( {errors} )
    }
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

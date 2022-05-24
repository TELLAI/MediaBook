const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

mongoose
  .connect(
    `mongodb+srv://youcef:${process.env.PASSWORD}@cluster0.gwrna.mongodb.net/Mediabook`,

  )
  .then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.log("Failed to connect to Mongodb", err));


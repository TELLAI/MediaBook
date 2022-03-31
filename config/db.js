const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

mongoose
  .connect(
    "mongodb://db-mediabook:" + process.env.PASSWORD + "@db-mediabook.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@db-mediabook@",

  )
  .then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.log("Failed to connect to Mongodb", err));

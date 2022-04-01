const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("./config/db");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const userRoutes = require("./routes/user.route")
const livreRoutes = require("./routes/livre.route")


const corsOptions = {
  origin: [process.env.CLIENT_URL, "http://localhost:3000"],
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

// bodyParser va nous permettre de mettre en forme les requetes 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// routes
app.use("/api/user", userRoutes);
app.use("/api/livre", livreRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

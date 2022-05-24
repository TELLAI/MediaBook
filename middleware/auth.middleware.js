const jwt = require("jsonwebtoken");
const userModel = require("../models/users.model");


const checkUser = async (req, res, next) => {
    const token = req.cookies.mytoken
    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, async function (err, decoded) {

            if(err) {
                res.locals.user = null
                next()
            }      
          else{
                const user = await userModel.findById(decoded.id);
                res.locals.user = user
                console.log(res.locals.user)
                next()
          }
        });
    }else {
        res.locals.user = null
        next()
    }
    
}

const requireAuth = (req, res, next) => {
  const token = req.cookies.mytoken;

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log("No token");
  }
};

module.exports = {
    checkUser,
    requireAuth,
}
var jwt = require('jsonwebtoken');
require('dotenv').config();

const verifytoken=(req,res,next)=>{
    const token=req.header('authtoken');
    if(!token){
        res.status(401).send("Please authenticate using valid token");
    }
    try {
        const data=jwt.verify(token,process.env.secpass);
        req.user =data.user;
        // console.log(data.user);
        next();
    } catch (error) {
        res.status(401).send("Please authenticate using valid token");
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifytoken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };

  
const verifyTokenAndAdmin = (req, res, next) => {
    verifytoken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };  

module.exports={verifytoken,verifyTokenAndAuthorization,verifyTokenAndAdmin};
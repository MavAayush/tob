const jwt = require("jsonwebtoken");
const USER = require("../models/userSchema");
const secretkey = process.env.KEY;

const authenticate = async(req,res,next)=>{
    try{
        const token = req.cookies.KeshriWeb;
        const verifyToken = jwt.verify(token,secretkey);
        console.log(verifyToken);
        const rootUser = await USER.findOne({_id:verifyToken._id,"tokens.token":token});
        console.log(rootUser);
        if(!rootUser){
            throw new Error("User not found");
        }
        req.token = token
        req.rootUser = rootUser
        req.userID = rootUser._id
        next();
    }catch(error){
        res.status(401).send("unauthiorized:No token provide");
        console.log(error);    
    }       
}

module.exports = authenticate;



const jwt = require('jsonwebtoken')
const User=require('../model/userSchema')
const Input = require('../model/inputSchema')

key="IAMSATYAMIAMWEBDEVELOPER";

const authenticate = async(req,res,next)=>{
    try {
        const token=req.cookies.jwtoken
        const verifyToken=jwt.verify(token,key)

        const rootUser=await User.findOne({_id:verifyToken._id, "tokens.token":token});

        if(!rootUser){throw Error('User not found')}

        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;

        next();
        
    } catch (error) {
        res.status(401).send('UnAuthorized : no token provided');
        console.log(error);
    }
}

module.exports= authenticate;
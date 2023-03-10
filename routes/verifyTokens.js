const jwt = require("jsonwebtoken");

const verifyToken =(req ,res ,next)=>{
    const authHeader = req.headers.token;

    if(authHeader){
        jwt.verify(token,process.env.JWT_SEC,(err ,user)=>{     // verifying tokens 
            if(err) res.status(403).json("token is not valid !");
            req.user = user;
            next();
        })
    }else{
        res.status(401).json("not authenticated!");
    }
}

const verifyTokenAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id=== req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("Not allowed to use this functionality")
        }
    })
}


module.exports = {verifyToken ,verifyTokenAuth};
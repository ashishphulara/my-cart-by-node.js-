const router = require("express").Router();
const {verifyToken , verifyTokenAuth} = require ("./verifyTokens")

router.put("/:id",verifyTokenAuth,(req,res)=>{
    
    if(req.body.password){
       req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    
    }
    // try{
    //   const updatedUser = await User.findByIdAndUpdate(req.params.id)  
    // }
})

module.exports = router;
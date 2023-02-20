const router = require("express").Router();
const {verifyToken} = require ("./verifyTokens")

router.put("/:id",verifyToken,(req,res)=>{

     
})

module.exports = router;
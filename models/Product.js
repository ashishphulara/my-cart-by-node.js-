const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(

    {
        title :{type:String , required : true ,unique:true},
        description:{type :String ,required :true  },
        img :{type :string ,required:true},
        categories :{type :Array},
        size :{type :string ,},
        color :{type :string },
        price :{type :sNumber ,required:true},
       
    },{timestamps:true})

    module.exports = mongoose.model("product", ProductSchema)
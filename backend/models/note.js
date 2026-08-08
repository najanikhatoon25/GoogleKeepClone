const mongoose = require("mongoose")

const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    descrption:{
        type:String,
        required:true
    },
    color:{
        type:String,
    }
},
{timestamps:true}
)
module.exports=mongoose.model("Note",noteschema)
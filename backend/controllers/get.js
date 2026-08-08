const mongoose = require("../models/Note")

const getnotes = async()=>{
   try{
    const notes = await Note.find().sort({createdAt:-1})
    res.json(notes);
   }
   catch(error){
    res.status(500).json({message:"failed to getnote"})
   }
}
module.exports=getnotes
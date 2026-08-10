const Note = require("../models/Note")

const getnotes = async(req,res)=>{
   try{
    const notes = await Note.find().sort({createdAt:-1})
    res.json(notes);
   }
   catch(error){
      console.log(error)
    res.status(500).json({message:"failed to getnote"})
   }
}
module.exports=getnotes
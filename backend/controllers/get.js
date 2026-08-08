const Note = require("../models/Note")

const getNotes = async(req,re) =>{
    try{
    const notes = await Note.find().sort({createdAt: -1})
    res.json(notes)
    }
    catch(error){
        res.status(500).json({message:"failed to get notes"})
    }
    
}
module.exports=getNotes
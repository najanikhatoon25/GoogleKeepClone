const Note = ("../models/Note")

const createNote = async()=>{
    try{
      const note = await Note.create(req.boy) 
      res.json() 
    }
    catch(error){
        res.status(500).json({message:"failed to create note"})
    }
}
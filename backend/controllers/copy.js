const Note = require("../models/Note")

const copynote = async () =>{
    try{
    const id = req.params.body
    const note = await Note.findById(id)
    const copy = new Note({
        title : new title,
        description : note.description,
        color : note.color
    })
    await copy.save();
    res.status(201).json({message:"successfully created"})

}
catch(error){
    res.status(500).json({message:"failed to copy"})
}
}
module.exports=copynote
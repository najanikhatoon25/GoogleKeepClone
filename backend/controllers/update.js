const note = require("../models/note");
const Note = require("../models/Note")

const updatenote = async () =>{
    try{
     const id = req.params.id;
     const data = req.body

     const updatenote = await Note.findByIdAndUpdate(
        id,
        data,
        {new:true}
     );
     res.json({message:"updated successfully"})
    }
    catch(error){
    res.status(500).json({message:"failed to update"})
    }
}
module.exports = updatenote
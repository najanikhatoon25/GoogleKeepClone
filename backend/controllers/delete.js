const Note = require("../models/Note")

const deletnote = async () =>{
    try{
        const id = req.params.id;
        const deletnote = await findByIdAndDelete(id)
        res.json({message:"Delete successfully"})
    }
    catch(error){
        res.status(500).json({message:"failed to deleted"})
    }
}
module.exports = deletnote
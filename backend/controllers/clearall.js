const Note = require ("../models/Note")

const clearall = async () => {
    try{
        const Note = await Note.deleteMany();
    res.json(200).json({message:"Note delete successfully"})
    }
    catch(error){
        res.status(500).json({message:"failed to delet"})
    }
}
module.exports = clearall

const Note = require("../models/Note");

const createnote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create note" });
  }
};

module.exports = createnote;
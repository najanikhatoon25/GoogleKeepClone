const Note = require("../models/Note");

const copynote = async (req, res) => {
  try {
    const id = req.params.id;

    const note = await Note.findById(id);

    const copy = new Note({
      title: note.title,
      description: note.description,
      color: note.color
    });

    await copy.save();

    res.status(201).json(copy);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to copy"
    });
  }
};

module.exports = copynote;
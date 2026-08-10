const Note = require("../models/Note");

const updatenote = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(updatedNote);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to update"
    });
  }
};

module.exports = updatenote;
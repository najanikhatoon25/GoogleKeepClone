const Note = require("../models/Note");

const deletnote = async (req, res) => {
  try {
    const id = req.params.id;

    await Note.findByIdAndDelete(id);

    res.json({
      message: "Delete successfully"
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to delete"
    });
  }
};

module.exports = deletnote;
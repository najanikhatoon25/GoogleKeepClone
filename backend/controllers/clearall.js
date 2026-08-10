const Note = require("../models/Note");

const clearall = async (req, res) => {
  try {
    await Note.deleteMany({});

    res.json({
      message: "Notes deleted successfully"
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to delete"
    });
  }
};

module.exports = clearall;
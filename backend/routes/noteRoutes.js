const express = require("express");

const createNote = require("../controllers/create");
const getnote = require("../controllers/get");
const updatenote = require("../controllers/update");
const deletnote = require("../controllers/delete");
const copynote = require("../controllers/copy");
const clearall = require("../controllers/clearall");

const router = express.Router();

router.post("/create", createNote);
router.get("/get", getnote);
router.put("/:id", updatenote);
router.delete("/:id", deletnote);
router.post("/:id/copy", copynote);
router.delete("/delete", clearall);

module.exports = router;
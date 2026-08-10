const express = require("express");

const createnote = require("../controllers/create");
const getnotes = require("../controllers/get");
const updatenote = require("../controllers/update");
const deletnote = require("../controllers/delete");
const copynote = require("../controllers/copy");
const clearall = require("../controllers/clearall");

const router = express.Router();

router.post("/create", createnote);
router.get("/get", getnotes);

router.delete("/delete", clearall);

router.post("/:id/copy", copynote);
router.put("/:id", updatenote);
router.delete("/:id", deletnote);

module.exports = router;
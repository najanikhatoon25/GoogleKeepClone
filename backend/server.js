const express = require("express")
const cors = require("cors")
require("dotenv").config();

const connectdb = require("./config/db")
const notesRoutes = require("./routes/noteRoutes")

connectdb()

const app = express()

app.use(cors());
app.use(express.json())

app.use(express.static("frontend"));


app.use("/api/notes",notesRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
const express = require("express");
const  notesRoutes = require("./routes/notesRoutes.js");
const app = express();

app.use("/",notesRoutes)
app.listen(5001,()=>{
  console.log("server is restarted");
})

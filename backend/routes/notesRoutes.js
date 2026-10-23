
const express = require("express");
const router = express.Router();
router.get("/name",(req,res)=>{
  res.status(201).json({message:"Note create successfully",name:"satyam kushwah"});
});

module.exports = router;

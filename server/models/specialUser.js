const mongoose =require("mongoose");

 const authorizeUser = new mongoose.Schema({
    name:String,
    role:String,
    status:String
 });
 module.exports = mongoose.model("User", authorizeUser);
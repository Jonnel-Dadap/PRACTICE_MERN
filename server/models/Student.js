const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    study: String,
    status: String
});

module.exports = mongoose.model("Student", studentSchema);
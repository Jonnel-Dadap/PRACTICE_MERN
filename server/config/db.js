const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/practice");

        console.log("MongoDB Connected");
        console.log("run for connectivity");
    } catch(error) {
        console.log(error);
        console.log("Have a Error!!");
    }
};

module.exports = connectDB;
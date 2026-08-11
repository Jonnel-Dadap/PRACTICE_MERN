const express = require("express");
const router = express.Router();

const User = require("../models/SpecialUser")

router.get("/fetch", async(req, res)=> {
    try{
        const specialuser = await User.find();

        res.json(specialuser);
    } catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

module.exports = router; 
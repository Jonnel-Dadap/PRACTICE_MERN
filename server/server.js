const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const app = express();
const PORT = 5000;

connectDB();
/* MIDDLE WARE */
app.use(cors());
app.use(express.json());
// app.use(express.urlenconded({ extended: true }));

/* Routes */
const  viewRoutes = require('./routes/viewer')

app.use('/viewers', viewRoutes)

app.listen(PORT, () =>{
    console.log("server is actice for testing IN PORT: ", PORT);
});

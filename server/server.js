const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const app = express();
const PORT = 5000;

connectDB();
/* MIDDLE WARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlenconded({ extended: true }));

/* Routes */
const  viewRoutes = require('./routes/viewer')
const  specialUser = require('./routes/OtherUser')

app.use('/viewers', viewRoutes)
app.use('/specialuser', specialUser)

app.listen(PORT, () =>{
    console.log("server is actice for testing IN PORT: ", PORT);
});

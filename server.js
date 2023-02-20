const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");


//dotenv config
dotenv.config()


const app = express();

//middlerware
app.use(morgan('dev'))
app.use(express.json()) // parser

//route




//
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.NODE_MODE}, mode on port ${process.env.PORT}`)
})
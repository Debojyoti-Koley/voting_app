const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())


//import router files
const userRoutes = require('./routes/userRoutes')
const candidateRoutes = require('./routes/candidateRoutes')

//use user files
app.use('/user',userRoutes)
app.use('/candidate', candidateRoutes)

const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Listing on 3000")
})
// import from  package

const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
// import from other files

const authRouter =  require('./routes/auth')
const uri = `mongodb+srv://codeayub:${process.env.DBPassword}@cluster0.cqhg8gl.mongodb.net/?retryWrites=true&w=majority`

// init
const app = express();
const port = 3000;
// middleware

app.use(express.json())
app.use(authRouter) 
// connection


// Creating An  API
mongoose.connect(uri).then(()=>{
    console.log("connection successful");
}).catch(e=>{
    console.log(e);
})

// server
app.listen(port,'0.0.0.0',()=>{
console.log(`Server Hosted at ${port}`);
})



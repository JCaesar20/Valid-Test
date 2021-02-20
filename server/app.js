const express = require('express');
const cors = require("cors");
const path= require('path')
require('./db/mongoose')
const app = express();

const formRouter = require('./router/form')

app.use(cors())
app.use(express.json())
app.use(formRouter)

app.use(express.static(path.join(__dirname, '../client/build')))


const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log('Server Started')
})
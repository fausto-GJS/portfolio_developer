const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config()
const router  = require('./served/router');
const app = express();

app.use(bodyParser.json())
app.use('/api',router)

if(process.env.NODE_ENV==="production"){
    app.use(express.static('./client/build'))
    const path = require('path')
    app.get('*',(req,res)=>{
        res.sendFile(__dirname,('client','build','index.html'))
    })
}
const PORT = process.env.PORT;
app.listen(PORT);

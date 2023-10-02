const express = require('express');
require('dotenv').config();
const app = express();
port = process.env.PORT || 4000;
const file = require("./all/index.html")
app.get('/',(req,res)=>{
    res.sendFile(file)
}) 

app.listen(port,()=>{
    console.log('BEST HA ' + port);
})


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbConfig = require('./config/dbConfig.js');
const path = require('path'); 
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.uri,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Db Connected");
        // console.log("Secret Key:"+dbConfig.secret);
    }
});

app.use(express.static(__dirname+'/client/dist'))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'client/dist/index.html'));
})





var port = process.env.port||8080;

app.listen(port,()=>{console.log("Running Server on port "+port)})
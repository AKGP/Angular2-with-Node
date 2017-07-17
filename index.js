const express = require('express');
const app = express();
const path = require('path'); 
const mysql = require('mysql');
const dbConfig = require('./config/dbConfig');
const router = express.Router();
var api = require('./routes/api')(router);


app.use(express.static(__dirname+'/client/dist'))
app.use('/api',api);    

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
})





var port = process.env.port||8080;

app.listen(port,()=>{console.log("Running Server on port "+port)})
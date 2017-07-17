const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

var connection = mysql.createConnection({
    host:'localhost',
    user:dbConfig.user,
    password:dbConfig.secret,
    database:'test'
});


connection.connect();


module.exports = (router)=>{
    router.post('/register',(req,res)=>{
        
        res.json(req.body.firstname);
    });

    return router;
}
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
        // console.log(req.body);
        var data = {
            firstname:req.body.firstname,
            // username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            // contact:req.body.contact,
            // confirmpwd:req.body.confirmpwd
        }
        // console.log(data);
        const queryToStore = "INSERT INTO user SET ?";
        connection.query(queryToStore, data, function(err,result){
            if(err){
                throw err;
            }
        });
    });

    router.get('/dashboard',(req,res)=>{
        connection.query("SELECT * FROM user",function(err,result,field){
            res.json(result);
        });
});
    return router;
}
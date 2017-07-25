const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');
// const caching = require('../caching/cache-server');
const Memcached = require('memcached');

var connection = mysql.createConnection({
    host:'localhost',
    user:dbConfig.user,
    password:dbConfig.secret,
    database:'test'
});


connection.connect();

memcached = new Memcached();
memcached.connect('localhost:11211',function(err,conn){
        if(err){
            console.log(conn.server);
        }
    });
module.exports = (router)=>{
    router.post('/register',(req,res)=>{
        var data = {
            firstname:req.body.firstname,
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            contact:req.body.contact,
            confirmpwd:req.body.confirmpwd
        }
        const queryToStore = "INSERT INTO user SET ?";
        connection.query(queryToStore, data, function(err,result){
            if(err){
                throw err;
            }
        });
    });

    router.get('/dashboard',(req,res)=>{
        //todo: check it from cache. If available return it from here
        // else hit the mysql query

        available =0; 
        memcached.get('result',function(err,data){
            if(err){
                available = 0;
                throw err;
            }
            else if(data){
                available = 1;
                res.json(data);
            }
        });
        console.log(available);

        connection.query("SELECT * FROM user",function(err,result,field){
            //set the result to cache
            console.log(result)
            memcached.set('result',result,1000,function(err,data){
                if(err){
                    throw err;
                }
            });
            res.json(result);
        });
});
    return router;
}
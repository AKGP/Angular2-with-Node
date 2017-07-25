

//#######Caching#######

const Memcached = require('memcached');

module.exports = function Cache(){

var memcached = new Memcached();

memcached.connect('localhost:11211',function(err,conn){
        if(err){
            console.log(conn.server);
        }
    });
var profile = {'name':'Rohit kumar', 
               'location':'Delhi', 
               'emailid':'iamrohitx@gmail.com' 
            }
memcached.set('profile', profile, 10000, function (err,data) { 
  if(err) {
    //   throw new err;
  console.log(err);
}
//   else console.log("kjhjd");
});

memcached.get('profile',function(err,data){
    if(err){
        throw new err;
    }
    console.log(data);
});




};





// function isAvailable(name,data){
    
// }

// function storeCache(data,time){

// }

// function clearCache(){

// }
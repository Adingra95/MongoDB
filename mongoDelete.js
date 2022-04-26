const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TestMongoDB',(err,db)=>{
if(err){
return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

db.collection('check').deleteMany({name:"Koffi"}).toArray().then((result)=>{
console.log(result);
});
db.close();
});
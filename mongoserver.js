const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/CAP919',(err,db)=>{
if(err){
return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

db.collection('CAP919').find().toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
console.log('Unable to fetch details',err);
});
db.close();
});
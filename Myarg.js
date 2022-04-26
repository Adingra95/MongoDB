const hbs = require ('hbs');
var app = express ();
const yargs = require ('yargs');
const argv = yargs; 
const {MongoClient,objectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/CAP919',(err, db) => {
if(err){
return console.log('Unable to connect to MongoDB server');
}
if ('va'===argv._[0]){
    db.collection('user').find().toArray().then((docs)=>{
        var output = JSON.stringify(docs,undefined, 2)

    },(err)=>{
        console.log('Unable to fetch data',err);
    });
    console.log('Connected to MongoDB server');
})
///note clear and note working 

import express from 'express'
const app = express()
import {config} from "dotenv"
config()
import {MongoClient} from "mongodb"
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// import {json} from 'body-parser'

const dbName = 'myPassMan'

const port = 3000
app.use(express.json());
// However, since Express 4.16.0 includes the json middleware natively, you don’t need to import body-parser at all. You can simply use express.json()

app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('PassManPasswords');
    const findResult = await collection.find({}).toArray();
    // console.log('Inserted documents =>', insertResult);
    res.send(findResult)
})
app.post('/', async(req, res) => {
    let password = req.body
    const db = client.db(dbName);
    const collection = db.collection('PassManPasswords');
    const findResult = await collection.insertOne(password);
    // console.log('Inserted documents =>', insertResult);
    res.send({success:true , result : findResult})
})
app.delete('/', async(req, res) => {
    let password = req.body
    const db = client.db(dbName);
    const collection = db.collection('PassManPasswords');
    const findResult = await collection.deleteOne(password);
    // console.log('Inserted documents =>', insertResult);
    res.send({success:true , result : findResult})
})
app.listen(port, () => {
  console.log(`Example app listening on  localhost:${port}`)
})
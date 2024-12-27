const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://KrinaBhalodiya:krina22030401020@cluster0.lmttp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

module.exports = client;

const { MongoClient } = require("mongodb");

require("dotenv").config();

const client = new MongoClient(process.env.MONGODB_URI);

let db;

async function initDB() {

    await client.connect();

    db = client.db("contacts"); // <-- revisa este nombre

    console.log("MongoDB connected");
}


function getDB() {
    return db;
}


module.exports = {
    initDB,
    getDB
};
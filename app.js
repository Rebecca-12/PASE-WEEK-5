

// With Mongo CLient

const express = require('express')
const app = express()
const port = 4000;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');



const LINK = "mongodb+srv://Rebecca-essandoh:kieta@becky.q8drv.mongodb.net/Becky_database"



// DB Name
const dbName = 'Becky_database';

// Creating new MongoClient
const client = new MongoClient(LINK);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    // Stating the constants needed
    const db = client.db(dbName);
    const collection = db.collection('collection_1');



    // Finding all the cases
    collection.find({}).toArray(async function (err, cases_list) {
        assert.equal(err, null);
        let cases = await cases_list;
        res.render('index.ejs', { 'stories': cases })
    });
})




// Connecting to server
client.connect(function (err) {
    assert.equal(null, err);
    console.log('Connected to DB ');

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    })
})




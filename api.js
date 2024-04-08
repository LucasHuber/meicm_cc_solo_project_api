const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3001;
var uri = process.env.DATABASE_URI || "localhost";

var client;
if (uri.startsWith("mongodb+srv://")) {
    client = new MongoClient(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
} else {
    client = new MongoClient(`mongodb://${uri}:27017`);
}

const message_collection = client.db('message_database').collection("messages");

app.get('/', (req, res) => {
    (async() => {
        res.send(await message_collection.find().toArray());
    })();
}); 

app.delete('/', (req, res) => {
    messages_collection.deleteMany({});
    res.sendStatus(200);
});

app.listen(port, () => console.log(`App started on ${port}!`));
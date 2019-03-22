const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017"

var app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.static('./dist'));

MongoClient.connect(url, function(err, client) {
  const db = client.db("mvp")
  console.log("Successfully connected to mongodb")
  app.get("/lobbylist", (req, res) => {
      const collection = db.collection('lobby');
      collection.find({}).toArray(function(err, data) {
        if (err) console.log(err);
        console.log(data)
        res.send(data);
      })
    })

    app.get('/*', (req, res) => {
      //send a response that includes html
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });

  })
  
  module.exports = app;

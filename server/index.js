const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

var app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  //send a response that includes html
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/lobby', (req, res) => {
  console.log('hitting /lobby')
  res.redirect('/');
})

module.exports = app;
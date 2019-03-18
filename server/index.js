const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

var app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.static('./dist'));

app.get('*', (req, res) => {
  //send a response that includes html
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

module.exports = app;
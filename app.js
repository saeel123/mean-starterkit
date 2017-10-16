const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//db connection
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', function () {
  console.log("connected to " + config.database);
});

const app = express();

// Routes Initails
const users = require('./routes/users');

//PORT Server
const port = 3000;

//MiddleWare
app.use(cors());
app.use(bodyParser.json());

//set Static Client Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users)

//Index Route
app.get('/', function (req, res) {
  res.send("Invalid End Point")
});

//Start Server
app.listen(port, function () {
  console.log("server started on port: "+port);
});

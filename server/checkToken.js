const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL

const fs = require('fs');
const https = require('https');

var nodemailer = require('nodemailer');
const jwt = requir('jsonwebtokenn');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());
app.use(cors());

function update_confrim_status(token) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
  
    var dbo = db.db(process.env.USER_DATABASE);
    dbo.collection(process.env.USER_COLLECTION).update({token: token}, {$set: {emailVerified: true}});
  });
}
  
app.get('/checkToken', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
  
    var dbo = db.db(process.env.USER_DATABASE);
    dbo.collection(process.env.USER_COLLECTION).find({ token: req.query.token }).toArray(function(err, result ) {
      if (err) throw err;
  
      console.log(result);
      if (result == undefined || result.length == 0) {
        res.send ({
          confrimed: "Invalid"
        });
      } else {
        update_confrim_status(req.query.token);
        res.send({
          confrimed: "Valid"
        })
      }
    })
  })
})

  Https.createServer({
    key: fs.readFileSync(process.env.KEY_PEM),
    cert: fs.readFileSync(process.env.CERT_PEM),
    ca: fs.readFileSync(process.env.CA_PEM)

}, app).listen(3012, () => {
    console.log('Started Server on port 3012');
})
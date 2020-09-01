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

var transport = {
    host: process.env.HOST_PROVIDER,
    port: process.env.SMPT_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
  }
}

var transporterToSender = nodemailer.createTransport(transport)

transporterToSender.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

function send_validation_email(email, token) {

  var mailToSender = {
    from: 'Longrichk@gmail.com',
    to: email,
    subject: "Thank you for signing up!",
    text: "Please confrim your email by clicking on the following link: \nhttp:\/\/longrichk.com\/confrim?&token=" + token
  }

  transporterToSender.sendMail(mailToSender, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
}

function createUser(username, password) {
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        var dbo = db.db(process.env.USER_DATABASE);
        console.log("connected");

        bcrypt.hash(password, 10, (err, hashPassword) => {
            if (err) {
                console.error(err);
                return
            }

            const token = jwt.sign(
                { userID: username },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h'});

            send_validation_email(username, token);

            dbo.collection(proccess.env.USER_COLLECTION).insertOne({
                Username: username,
                Password: hashPassword,
                token: token
            }),
            function(err, result) {
                if (err) throw err;
                    result.json(result);
            }
        });
    });
}

app.get('/SignUp', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(process.env.USER_DATABASE);

        dbo.collection(proccess.env.USER_COLLECTION).count({ Username: req.query.Username })
            .then ((count) => {
                if (count > 0) {
                    console.log("Username Taken");
                    res.send({
                        Username: "Taken"
                    });
                } else {
                    console.log("Username Not Take");
                    createUser(req.query.Username, req.query.Password);
                    res.send({
                        Username: "Not Taken"
                    })
                }
            });
            db.close();
    });
});

Https.createServer({
    key: fs.readFileSync(process.env.KEY_PEM),
    cert: fs.readFileSync(process.env.CERT_PEM),
    ca: fs.readFileSync(process.env.CA_PEM)

}, app).listen(3012, () => {
    console.log('Started Server on port 3012');
})

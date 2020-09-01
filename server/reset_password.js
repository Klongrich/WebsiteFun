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
})

app.get('/SetNewPassword', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(process.env.USER_DATABASE);

        bcrypt.hash(req.query.password, 10, (err, hashPassword) => {
            dbo.collection(process.env.USER_COLLECTION).update({ reset_password_token: req.query.token } , {$set: {Password: hashPassword, reset_password_token: null}});
        
            console.log("New Password set: " + hashPassword);
        })
    });

});

app.get('/ResetPassword', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(process.env.USER_DATABASE);

        const token = jwt.sign(
            { userID: username },
            'Reset_user_password',
            { expiresIn: '24h'});

        dbo.collection(process.env.USER_COLLECTION).update({ Username: req.query.username},{$set: {reset_password_token: token}});
        
        var mailToSender = {
            from: 'Longrichk@gmail.com',
            to: email,
            subject: "Reset Password",
            text: "You have requested to reset your password. Click on the link below to reset: \n\nhttps://longrichk.com/ResetPassword?token=" + token
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

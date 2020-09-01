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

        let date_ob = new Date();

        let month = ("0" + (data_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let date = ("0" + date_ob.getDate()).slice(-2);

        let current_date = (month + "-" + date + "-" + year);

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
                emailVerified: false,
                account_creation_date: current_date,
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

app.get('/LogIn', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        var dbo = db.db(process.env.USER_DATABASE);
        dbo.collection(process.env.USER_COLLECTION).find( {Username: req.query.Username }).toArray(function (err, result) {
            if (err) throw err;

            if (result == undefined || result.length == 0) {
                res.send({
                    match: "Invalid Username"
                })
            } else {
                
                bcrypt.compare(req.query.Password, result[0].Password, function(err, isMatch) {
                    if (err) {
                        throw err;
                    } else if (!isMatch) {
                        console.log("Password Doesn't Match");
                        res.send({
                            match: "Invalid Password"
                        })
                    } else {
                        console.log("Passwords Match!");
                        
                        if (result[0].emailVerified) {
                            res.send({
                                match: "Email Not Verifed"
                            });
                        } else {
                            res.send({
                                match: "Vaild"
                            })
                        }
                    }
                });
            }
            db.close();
        })
    })
})

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

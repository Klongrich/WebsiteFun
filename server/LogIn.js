const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());
app.use(cors());

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

Https.createServer({
    key: fs.readFileSync(process.env.KEY_PEM),
    cert: fs.readFileSync(process.env.CERT_PEM),
    ca: fs.readFileSync(process.env.CA_PEM)

}, app).listen(3012, () => {
    console.log('Started Server on port 3012');
})
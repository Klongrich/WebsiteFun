const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());
app.use(cors());

function createUser(username, password) {
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        var dbo = db.db(process.env.USER_DATABASE);
        console.log("connected");

        dbo.collection(proccess.env.USER_COLLECTION).insertOne({
            Username: username,
            Password: password
        }),
        function(err, result) {
            if (err) throw err;
                result.json(result);
        }
    });
}

app.get('/checkUser', function(req, res, next) {

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
    });
});

app.listen(3012 ,() => console.log("Started server on port 3012"))
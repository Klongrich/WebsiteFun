var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

require('dotenv').config()

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

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3010)
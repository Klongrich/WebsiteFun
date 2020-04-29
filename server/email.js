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

var transporterToMe = nodemailer.createTransport(transport)

transporterToMe.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

var transporterToSender = nodemailer.createTransport(transport)

transporterToSender.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/email', (req, res, next) => {
  var email = req.body.email
  var message = req.body.message

  var mailToMe = {
    from: email,
    to: 'longrichk@gmail.com',  // Change to email address that you want to receive messages on
    subject: `New Message from ${email} `,
    text: message
  }

  var mailToSender = {
    from: email,
    to: email,
    subject: "Thank you for feedback",
    text: "You message has been recived Thank you for your submission"
  }

  transporterToMe.sendMail(mailToMe, (err, data) => {
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
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3010)
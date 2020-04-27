var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    secure: true,
    auth: {
        user: 'longrichk@gmail.com',
        pass: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/email', (req, res, next) => {
  var email = req.body.email
  var message = req.body.message

  var mail = {
    from: email,
    to: 'longrichk@gmail.com',  // Change to email address that you want to receive messages on
    subject: `New Message from ${email} `,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
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
const app = require('../server.js');

module.exports = {
postMessage(req, res, next) {
  //nodemailer
  const nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
      }
  });
  const mailOptions = {
  from: 'zaspringer@gmail.com', // sender address
  to: 'ksarch@comcast.net', // list of receivers
  subject: 'Testing', // Subject line
  html: '<p>Is this coming through?</p>'// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       console.log('error', err)
     else
       console.log('info', info);
  });
}

}

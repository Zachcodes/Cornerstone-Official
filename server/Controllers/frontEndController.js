const app = require('../server.js');

module.exports = {
  postMessage(req, res, next) {

    //Construct email message from body
    var {name, email, subject, message, requestCallback, phone, timeToCall} = req.body;
    message = `<html>Name: ${name}<br>${message}`;
    if(requestCallback && phone) {
      message = `${message}<br>Requested Callback: True<br>Phone: ${phone}<br>Best Time To Call: ${timeToCall}</html>`;
    }
    else {
      message = `${message}<br>Requested Callback: False</html>`;
    }

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
    from: email, // sender address
    to: process.env.RECEIVING_EMAIL, // list of receivers
    subject: subject, // Subject line
    html: message// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
       if(err)
         res.send(err)
       else
         res.status(200).send('Success');
    });
  },

  getImages(req, res, next) {

    var fs = require('fs');
    const type = req.params.type;
    var path = `./Images/${type}`;

    if(fs.existsSync(path)) {

      fs.readdir(path, function(err, filenames) {
        if (err) {
          onError(err);
          return;
        }
        var imagePaths = [];

        filenames.forEach(function(filename) {
          var filePath = `/Images/${type}/${filename}`;
          imagePaths.push(filePath);
        });
        res.status(200).send(imagePaths);
      });

    }
    else {
      res.send('No Images');
    }
  }

}

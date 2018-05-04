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
    var db = app.get('db');
    var fs = require('fs');
    const type = req.params.type;
    var path = `./Images/${type}`;

    if(fs.existsSync(path)) {

      fs.readdir(path, function(err, filenames) {
        if (err) {
          onError(err);
          return;
        }
        var images = [];

        filenames.forEach(function(filename) {
          var filePath = `/Images/${type}/${filename}`;
          db.get_portfolio_by_filename({filename, type}).then(result => {
            result[0].imagePath = filePath;
            //need to make this so that it makes one initial db call and
            //then I just loop through results otherwise I'll run into async issues
            console.log(result[0])
            images.push(result[0])
          })
        });
        console.log(images)
        res.status(200).send(images);
      });

    }
    else {
      res.send('No Images');
    }
  }

}


var nodemailer = require('nodemailer');
var db = require("../../models/user");

db.UserPlant.findAll({
  where: {
    UserId: req.body.userId
  }
})
  .populate('User')
  .then((results) => {
    console.log(results)
    if (results.length === 0) {
      return
    } else {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'azzabdin@gmail.com',
          pass: 'slwcvpmjaeywvztm'
        }
      });

      var mailOptions = {
        from: 'azzabdin@gmail.com',
        to: results[0].User.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
  })

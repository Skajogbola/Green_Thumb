
var nodemailer = require('nodemailer');
var db = require("./models");
module.exports=function () {
  console.log("it is runing")
  
 db.UserPlant.findAll({
 include: [db.User]})
  .then((results) => {
    console.log(results)
//     if (results.length === 0) {
//       return
//     } else {
//       var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'azzabdin@gmail.com',
//           pass: 'slwcvpmjaeywvztm'
//         }
//       });

//       var mailOptions = {
//         from: 'azzabdin@gmail.com',
//         to: results[0].User.email,
//         subject: 'Sending Email using Node.js',
//         text: 'Hello DID YOU WATER YOUR PLANTS TODAY?'
//       };

//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
//     }
   })
 }

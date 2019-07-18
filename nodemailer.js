
// var nodemailer = require('nodemailer');
// var db = require("./models");
// module.exports = function () {
//   console.log("it is runing")

//   db.UserPlant
//     .findAll(
//       {
//         attributes: ['userId'],

//       })
//     .then(function (results, q) {
//       console.log(results[0].dataValues)
//       if (typeof results[0].dataValues === 'array'){
//         results[0].dataValues.forEach(element => {
//           (
//             db.User.findAll({
//               where: { id: results[0].dataValues.userId }

//             }).then(results => {
//               console.log(results[0].dataValues.email)
//             }))

//         });
//     } else {
//         db.User.findAll({
//           where: { id: results[0].dataValues.userId }

//         }).then(results => {
//           console.log(results[0].dataValues.email)
//           var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               user: 'azzabdin@gmail.com',
//               pass: 'slwcvpmjaeywvztm'
//             }
//           });
      
//           var mailOptions = {
//             from: 'azzabdin@gmail.com',
//             to: results[0].dataValues.email,
      
//             subject: 'Sending Email using Node.js',
//             text: 'Hello DID YOU WATER YOUR PLANTS TODAY?'
//           };
      
//           transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//           });
//         })

//       }

//           var mailOptions = {
//             from: 'azzabdin@gmail.com',
//             to: results[0].dataValues.email,

//             subject: 'Sending Email using Node.js',
//             text: 'Hello DID YOU WATER YOUR PLANTS TODAY?'
//           };

//           transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//           });
//         })

//       }
//     });
//   }



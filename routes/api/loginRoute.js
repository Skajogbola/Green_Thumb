var db = require("../../models");
var passport = require('../../config/passport');
const router = require("express").Router();

router.route("/")
// router.route("/loginRoute")
  .post(function (req, res) {
    console.log(req.body)
    db.User.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user.validPassword(req.body.password)) {

        res.json({ success: true, userInfo: user })
      } else {
        res.json({ success: false, msg: 'Invalid username or password' })
      }

    }).catch((err) => {
      res.json(err)
    })
  })


module.exports = router;

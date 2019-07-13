var db = require("../../models");
const router = require("express").Router();

router.route("/")
    .post(function (req, res) {
        console.log(req.body);
        db.User.create({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    })
  

module.exports = router;

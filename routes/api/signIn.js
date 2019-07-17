var db = require("../../models");
const router = require("express").Router();

router.route("/")
// router.route("/signin")
    .post(function (req, res) {
        console.log(req.body);
        db.User.create({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        }).then(function (results) {
            res.json(results);
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    })


module.exports = router;

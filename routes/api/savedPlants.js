var db = require("../../models");
const router = require("express").Router();

router.route("/")
// router.route("/savedPlants")
    .post(function (req, res) {
        console.log("hello from plants", req.body)
        db.UserPlant.create({
            plantId: req.body.plantId,
            userId: req.body.userId
        }).then(function (results) {
            res.json(results);
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });

    })


module.exports = router;

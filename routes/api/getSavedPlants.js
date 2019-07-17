var db = require("../../models");

const router = require("express").Router();

router.route("/")
// router.route("/getSavedPlants")
    .post(function (req, res) {
        console.log("hello from plants", req.body)

        db.User.findAll({
            where: { id: req.body.userId }, include: [
                {
                    model: db.UserPlant,
                    where: {
                        id: req.body.userId,

                    },
                    required: true
                }
            ]
        }).then(results => {
            res.json(results)
        })
    })


module.exports = router;
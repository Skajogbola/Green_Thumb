var db = require("../../models");

const router = require("express").Router();

router.route("/")
    .get(function (req, res) {
        console.log("hello from plants")
        db.Plant.findAll({}).then((plants) => {
            if (plants) {
                res.json({ success: true, plants })
            } else {
                res.json({ success: false, msg: 'No Plants Found' })
            }


        });
    })


module.exports = router;

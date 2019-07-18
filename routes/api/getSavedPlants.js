var db = require("../../models");

const router = require("express").Router();

router.route("/")
    // router.route("/getSavedPlants")
    .post(function (req, res) {
        console.log("hello from plants", req.body)
        //db.UserPlant.findAll({attributes:['plantId', 'userId', 'id']}).then(data=>console.log(data))

        // Get all the plants
        db.Plant.findAll()
            .then(allPlants => {
                //res.json(allPlants);
                db.UserPlant
                    .findAll(
                        {
                            attributes:['plantId', 'userId', 'id'],
                            where:{userId: req.body.userId}
                        }
                    )
                    .then(userPlantsIds => {
                        let plantIds = [];
                        userPlantsIds.forEach(e => {
                            plantIds.push(e.plantId);
                        });
                        //res.json(plantIds);
                        let updatedPlantIds = [...new Set(plantIds)];
                        let userSavedPlants = [];
                        allPlants.forEach( e => {
                            if(updatedPlantIds.indexOf(e.id) !== -1) {
                                userSavedPlants.push(e);
                            }
                        });
                        res.status(200).json(userSavedPlants);
                    })
                    .catch(err => { console.log('Unable to get User Plants Ids', err) });
            })
            .catch(err => { console.log('Unabled to get all plants', err) });



        //     where: { id: req.body.userId }, include: [
        //         {
        //             model: db.UserPlant,
        //             where: {
        //                 id: req.body.userId,
        //                 include: [
        //                     {
        //                         model: db.Plant,
        //                         where: {
        //                             id: req.body.plantId,
        //                         }
        //                     }
        //                 ]
        //             },
        //             required: true
        //         }
        //     ]
        // }).then(results => {
        //     res.json(results)
        // })
    })


module.exports = router;
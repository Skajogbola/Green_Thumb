const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const signinRoute = require('./signIn');
const loginRoute = require('./loginRoute');
const getPlants = require('./getPlants');
const savedPlants = require("./savedPlants");
const getSavedPlants = require("./getSavedPlants")

// Book routes
router.use("/getPlants", getPlants);
router.use("/savedPlants", savedPlants);
router.use("/getSavedPlants", getSavedPlants);


// Signin Routes
router.use('/signin', signinRoute)
router.use('/login', loginRoute)

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;

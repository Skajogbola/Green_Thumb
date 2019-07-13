const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const signinRoute = require('./signIn')
const loginRoute = require('./loginRoute')

// Book routes
router.use("/books", bookRoutes);

// Signin Routes
router.use('/signin', signinRoute)
router.use('/login', loginRoute)

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;

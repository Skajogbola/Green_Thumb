require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
var cors = require('cors')
// const mailer = require("./nodemailer.js")

const corsFn = cors({
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
})

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(function (req, res, next) {
  corsFn(req, res, () => {
    res.set('Access-Control-Allow-Origin', '*')

    if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'GET')
      res.set('Access-Control-Allow-Headers', 'Content-Type')
      res.set('Access-Control-Max-Age', '3600')
      res.status.send(204).send('');
    } else {
      next()
    }

  })
})


const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Add routes, both API and view
app.use(routes);

// Start the API server
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, () => {


    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    // mailer();
  })

});



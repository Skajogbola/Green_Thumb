require("dotenv").config();
module.exports = {
    "development": {
      "username": process.env.HEROKUUN,
      "password": process.env.HEROKUPW,
      "database": process.env.HEROKUDB,
      "host": process.env.HEROKUHOST,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "testdb",
      "host": "localhost",
      "dialect": "mysql",
      "logging": false
    },
    "production": {
      "username": "koozdnjxeare3e68",
      "password": "fjehdhwu5wvgvsnn",
      "database": "knsajw9h7x854suc",
      "host": "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      "dialect": "mysql"
    }
  };

// This is for local branch testing only.
// module.exports = {
//   "development": {
//     "username": "root",
//     "password": process.env.PASSWORD,
//     "database": process.env.DATABASE,
//     "host": "localhost",
//     "dialect": "mysql"
    
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "testdb",
//     "host": "localhost",
//     "dialect": "mysql",
//     "logging": false
//   },
//   "production": {
//     "use_env_variable": "JAWSDB_URL",
//     "dialect": "mysql"
//   }
// }
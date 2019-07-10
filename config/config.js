// module.exports = {
//     "development": {
//       "username": process.env.HEROKUUN,
//       "password": process.env.HEROKUPW,
//       "database": process.env.HEROKUDB,
//       "host": process.env.HEROKUHOST,
//       "dialect": "mysql"
//     },
//     "test": {
//       "username": "root",
//       "password": null,
//       "database": "testdb",
//       "host": "localhost",
//       "dialect": "mysql",
//       "logging": false
//     },
//     "production": {
//       "use_env_variable": "JAWSDB_URL",
//       "dialect": "mysql"
//     }
//   };
  
  // This is for local branch testing only.
  module.exports = {
    "development": {
      "username": "root",
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE,
      "host": "localhost",
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
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }
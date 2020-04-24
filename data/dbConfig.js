// const knex = require("knex");
// const config = require("../knexfile.js");

// const environment = process.env.DB_ENV || "development";

// module.exports = knex(config[environment]);

const knex = require("knex");

const configOptions = require("../knexfile").development;

module.exports = knex(configOptions);

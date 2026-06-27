const { Pool } = require("pg");
module.exports = new Pool({
    host: "localhost",
    user: "jasir",
    database: "gym_inventory",
    password: "KOKOGASSER354",
    port: "5432"
})
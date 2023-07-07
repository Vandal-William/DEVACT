const { Client: pgClient } = require('pg');

const client = new pgClient({
    password: process.env.PG_PASSWORD,
    user: process.env.PG_USERNAME,
    database: process.env.PG_DATABASE_NAME,
    host: process.env.PG_URL

});


client.connect();


module.exports = client;
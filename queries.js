const { Client } = require('pg');
const client = new Client ({
    user: "user",
    host: "localhost",
    database: "socials",
    password: "pass",
    port: 5432
});
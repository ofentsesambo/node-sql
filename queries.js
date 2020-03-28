const { Client } = require('pg');
const client = new Client ({
    user: "user",
    host: "localhost",
    database: "socials",
    password: "pass",
    port: 5432
});

const helloWorld = () => {
    pool.query(
        "SELECT $1::text as message"
        ["Hello world!"],
        (error, results) => {
            if(error) {
                throw error;
            }
        console.log(results.row);
        }

    );
};

helloWorld();
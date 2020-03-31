const { Client } = require('pg');
const client = new Client ({
    user: "user",
    host: "localhost",
    database: "socials",
    password: "pass",
    port: 5432
});

client.connect();

const addNewVisitor = async (name, age, dateOfVisit, timeOfVisit, assistantName, comment) => {
    try {
        let results = await client.query(
           ` INSERT INTO visitor(
               
                visitorName,
                age,
                dateOfVisit,
                timeOfVisit,
                assistantName,
                comments,
            ) values ($1, $2, $3 $4, $5, $6) returning *;`,
        [name, age, dateOfVisit, timeOfVisit, assistantName, comment]
        );

        return results.rows;
    } catch(error){
        throw error;
    }
};

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

const listAllVisitors = async() => {
    const SQL = `SELECT id, visitorName FROM visitor;`
    try {
        query = await client.query(SQL);
        return query.rows;
    } catch(error){
        throw error;
    }
};

const deleteVisitor = async(id) => {
    try {
        let deleted = await client.query(`DELETE FROM visitor where id =$1;`,[id]);
        return deleted;
    } catch (error) {
        throw error;
    }
};

const updateVistor = async(id, where, value) => {
    try {
        let updated = await client.query(`UPDATE visitor set ${where}= $2 WHERE id = $1;` [id,value]);
        return updated;
    } catch (error){
        throw error;
    }
};

const viewVisitor = async(id) => {
    try {
        const query = await client.query(`SELECT * FROM visitor WHERE id=$1;`,[id]);
        return query.rows;
    } catch (error) {
        throw error;
    }
};

const deleteVisitor = async() => {
    try {
        let emptied = await client.query(`DELETE FROM viewVisitor;`);
        return deleted;
    } catch(error) {
        throw error;
    }
};



module.exports = {}
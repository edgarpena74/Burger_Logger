const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abc123',
    database: 'burgerdb'
});

connection.connect((err) => {
    if(err) {
        console.error(`error connecting: ${err.stack}`)
        return;
    }
    console.log(`connected as id ${connection.threadid}`)
});

module.exports = connection;

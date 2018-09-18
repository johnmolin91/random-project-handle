var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nba2018scheduledb",
    multipleStatements: true
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
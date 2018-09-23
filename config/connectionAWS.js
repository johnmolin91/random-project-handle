var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
    host: "mynbadbinstance.cnahqjrysj6v.us-east-2.rds.amazonaws.com",
    user: "root",
    password: "rootroot1",
    database: "nba2018scheduledb",
    PORT: 3306,
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
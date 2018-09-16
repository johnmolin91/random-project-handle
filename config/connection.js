var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nbaplayerstats18adv"
});

var connection2 = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nba2018scheduledb"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("1. connected as id " + connection.threadId);
});

connection2.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("2. connected as id " + connection.threadId);
});

module.exports = connection;
module.exports = connection2;
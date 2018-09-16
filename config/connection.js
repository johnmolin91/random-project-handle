var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nbaplayerstats18adv"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
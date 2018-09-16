var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT Player, ROUND((MP/G)*(USGP)*(PER/4 + TSP/3 + 3PAR/4 + FTR/4 + TRBP/3 + ASTP/3 + STLP/4 + BLKP/4 - TOVP/4) + 100*(OWS + DWS/2 + WS + WS48) + 20*(OBPM + DBPM/2 + BPM + VORP), 1) AS rawAdv FROM nbaplayerstats18adv.playersadvanced ORDER BY rawAdv DESC LIMIT 100"
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    schedule: function(tableInput, cb) {
        var queryString2 = 'SELECT * FROM nba2018scheduledb.october2018'
        connection2.query(queryString2, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
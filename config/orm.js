var connection = require("./connection.js");
// FULL JOIN october2018 ON playersadvanced.Rk=october2018.gameid LIMIT 50"

var orm = {
    all: function(tableInput, cb) {
        // var queryString = "SELECT Player, ROUND((MP/G)*(USGP)*(PER/4 + TSP/3 + 3PAR/4 + FTR/4 + TRBP/3 + ASTP/3 + STLP/4 + BLKP/4 - TOVP/4) + 100*(OWS + DWS/2 + WS + WS48) + 20*(OBPM + DBPM/2 + BPM + VORP), 1) AS rawAdv FROM nba2018scheduledb.playersadvanced ORDER BY rawAdv DESC LIMIT 100";
        // var queryString2 = "SELECT * FROM nba2018scheduledb.october2018"
        var queryString = 'SELECT playersadvanced.Rk, playersadvanced.Player, ROUND((playersadvanced.MP/G)*(playersadvanced.USGP)*(playersadvanced.PER/4 + playersadvanced.TSP/3 + playersadvanced.3PAR/4 + playersadvanced.FTR/4 + playersadvanced.TRBP/3 + playersadvanced.ASTP/3 + playersadvanced.STLP/4 + playersadvanced.BLKP/4 - playersadvanced.TOVP/4) + 100*(playersadvanced.OWS + playersadvanced.DWS/2 + playersadvanced.WS + playersadvanced.WS48) + 20*(playersadvanced.OBPM + playersadvanced.DBPM/2 + playersadvanced.BPM + playersadvanced.VORP), 1) AS rawAdv, october2018.gameid, october2018.visitorTeam, october2018.homeTeam FROM playersadvanced LEFT JOIN october2018 ON playersadvanced.RK WHERE playersadvanced.Rk=october2018.gameid LIMIT 50'
        // var queryString = "SELECT playersadvanced.Rk, playersadvanced.Player, october2018.gameid FROM playersadvanced LEFT JOIN october2018 ON playersadvanced.Rk WHERE october2018.gameid=playersadvanced.Rk LIMIT 50";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    // schedule: function(tableInput, cb) {
    //     var queryString2 = 'SELECT * FROM nba2018scheduledb.october2018'
    //     connection.query(queryString2, function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //     });
    // }
};

module.exports = orm;
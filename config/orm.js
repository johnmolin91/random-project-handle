var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT Player, (MP/G)*(USGP)*(PER/4 + TSP/3 + 3PAR/4 + FTR/4 + TRBP/3 + ASTP/3 + STLP/4 + BLKP/4 - TOVP/4) + 100*(OWS + DWS/2 + WS + WS48) + 20*(OBPM + DBPM/2 + BPM + VORP) AS rawAdv FROM playersadvanced ORDER BY rawAdv DESC LIMIT 200"
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
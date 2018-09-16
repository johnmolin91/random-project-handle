var orm = require("../config/orm.js");

var player = {
    all: function(cb) {
        orm.all("players", function(res) {
            cb(res);
        });
    },
    schedule: function(cb) {
        orm.schedule("players", function(res) {
            cb(res);
        });
    }
};

// var today = {
//     schedule: function(cb) {
//         orm.schedule("players", function(res) {
//             cb (res);
//         });
//     }
// }

module.exports = player;
// module.exports = today;
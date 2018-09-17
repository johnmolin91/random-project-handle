var orm = require("../config/orm.js");

var player = {
    all: function(cb) {
        orm.all("players", function(res) {
            cb(res);
        });
    },
    // schedule: function(cb) {
    //     orm.schedule("schedule", function(res) {
    //         cb(res);
    //     });
    // }
};

module.exports = player;
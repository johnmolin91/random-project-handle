var orm = require("../config/orm.js");

var player = {
    all: function(cb) {
        orm.all("players", function(res) {
            cb(res);
        });
    }
};

module.exports = player;
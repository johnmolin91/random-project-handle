var express = require("express");
var router = express.Router();
var player = require("../models/player.js");

router.get("/", function(req, res) {
    res.redirect("/players");
});

router.get("/players", function(req,res) {
    player.all(function(playerData) {
        res.render("index", { player_data: playerData });
    });
});

router.get("/players", function(req,res) {
    player.schedule(function(scheduleData) {
        res.render("index", { schedule_data: scheduleData });
    });
});

module.exports = router;
$(document).ready(function() {
    $(".playerButton").on("click", function() {
        for (var i = 0; i++; i < this.length) {
            var x = document.getElementById("playerStats");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    });
});
$(document).ready(function() {
    var boundary = 0;
    var lost = false;
    var start = false;
    $(document).mousemove(function() {
        if ((!$("#maze:hover").length != 0 && start) || ($(".boundary:hover").length != 0 && !lost && start)) {
            $(".boundary").addClass("youlose");
            boundary++;
            lost = true;
            $("#status").text("You Lose!");
        }
    });
    $("#end").mouseover(function() {
        if ($(".boundary:hover").length == 0 && boundary == 0) {
            start = false;
            $("#status").text("You Won!");
        }
    });
    $(document).keypress(function(x) {
        if (x.keyCode == "115") {
            $(".boundary").removeClass("youlose");
            lost = false;
            start = true;
            boundary = 0;
            $("#status").text("Click the 'S' to begin.");
        }
    });
    $("#start").click(function(x) {
        $(".boundary").removeClass("youlose");
        lost = false;
        start = true;
        boundary = 0;
        $("#status").text("Click the 'S' to begin.");
    });
});
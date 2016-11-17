for (var i = 0; i < 200;i++) {
    $(".wrapper").append("<div class='blob'></div");
    }
 
$(".blob").mousemove(function() {
    console.log("you entered it...");
    $(this).css("animation-iteration-count", "0");
    $(this).css("font-family", "futura");
    $(this).css("background-color", "pink");
    $(this).css("z-index", "-100000");
});
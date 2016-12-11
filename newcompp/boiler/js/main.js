for (var i = 0; i < 53;i++) {
    if (Math.random() > .5) {
        $(".wrapper").append("<div class='circle'></div");
    } else {
        $(".wrapper").append("<div class='circle rando'></div");
    }
}

$(".circle").mousemove(function() {
    console.log("you clicked it...");
    $(this).css("background-color", "#03c535");
    $(this).css("border-color", "white");
    $(this).css("animation-iteration-count", "0");
}); 

$(".spearmint").click(function() {
    console.log("you clicked it...");
    $(this).css("background-color", "white");
    $(this).css("color", "#03c535");
});


for (var i = 0; i < 100/2;i++) {
    $(".wrapper").append("<div class='circle'></div");
    }

$(".circle").mousemove(function() {
    console.log("you clicked it...");
    $(this).css("background-color", "#03c535");
    $(this).css("border-color", "white");
    $(this).html("");
    $(this).css("animation-iteration-count", "0");
}); 

$(".spearmint").click(function() {
    console.log("you clicked it...");
    $(this).css("background-color", "white");
    $(this).css("color", "#03c535");
});


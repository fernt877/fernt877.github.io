for (var i = 0; i < 300;i++) {
    $(".wrapper").append("<div class='blob'></div");
    }
 
$(".blob").mousemove(function() {
    console.log("you entered it...");
    $(this).css("animation-iteration-count", "0");
    $(this).css("font-family", "futura");
    $(this).css("background-color", "transparent");
    $(this).css("z-index", "-100000");
});

var myArray = ["jisoo.jpg", "rose.jpg", "lisa.jpg"];



$(".image-wrapper").click(function() {
    $(".image").attr("src", myArray[Math.floor(Math.random()*myArray.length)]);

    
});

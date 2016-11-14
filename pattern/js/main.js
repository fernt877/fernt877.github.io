console.log("hello world");

$("body").css("background-color","blue");

var hasClicked = false;

$("button").click(function() {
    console.log(hasClicked);
    $("button").css("background-color", "red");
    hasClicked = true;
});

for (var i = 0; i < 100; i++) {
    $("body").append("<div class = 'go'></div");
    }

var counter = 0;

$(".go").each(function() {
    console.log(counter);
    console.log("found a div with a clas go");
    $(this).css("border-radius", counter/2 + "%");
    counter++;
});

$(".go").click(function() {
    console.log("you clicked it...");
    $(this).css("background-color", "lime");
    $(this).html("hello");
});

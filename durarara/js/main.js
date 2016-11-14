for (var i = 0; i < 3;i++) {
    $(".wrapper").append("<div class='blob'></div");
    }
    
    var counter = 1
    var character = ["img/mikado.jpg", "img/erika.jpg", "img/izaya.jpg", "img/anri.jpg", "img/shinra.jpg", "img/saki.jpg", "img/shingeri.jpg", "img/simon.jpg", "img/tom.jpg", "img/masaomi.jpg"];
    
    myArray[Math.floor(Math.random()*myArray.length)];
    
$(".blob").mouseenter(function() {
    console.log("you entered it...");
    $(this).css("height", "300px");
});

$(".blob").click(function() {
    var character = character[Math.floor(Math.random()*cats.length)];
    $("body").append('<img src="img/mikado.jpg" + newCharacter + '" class="cat">');
});
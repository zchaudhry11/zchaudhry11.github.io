let timer = 0;
/*
$(document).ready(function () {
	// Add hover sound to tiles
	$(".projectTile").hover(function() {
		playHoverTile();
	});

	$(".artTile").hover(function() {
		playHoverTile();
    });
    
    $("#contacts .resume").mouseover(function() {
        clearTimeout(timer);
        timer = setTimeout(function(){
            playHoverLink();
        }, 400)
    });

    $("#contacts .email").mouseover(function() {
        clearTimeout(timer);
        timer = setTimeout(function(){
            playHoverLink();
        }, 400)
    });

    $("#contacts .phone").mouseover(function() {
        clearTimeout(timer);
        timer = setTimeout(function(){
            playHoverLink();
        }, 400)
    });

    $("#contacts .github").mouseover(function() {
        clearTimeout(timer);
        timer = setTimeout(function(){
            playHoverLink();
        }, 400)
    });

    $("#contacts .linkedin").mouseover(function() {
        clearTimeout(timer);
        timer = setTimeout(function(){
            playHoverLink();
        }, 400)
    });
});
*/

function playLinkClick() {
    var aud = document.getElementById("link");
    aud.volume = 0.25;
    aud.play();
}

function playSelectClick() {
    var aud = document.getElementById("selectTile");
    aud.volume = 0.25;
    aud.play();
}

function playArrowClick() {
    var aud = document.getElementById("arrow");
    aud.volume = 0.25;
    aud.play();
}

function playReturnClick() {
    var aud = document.getElementById("return");
    aud.volume = 0.25;
    aud.play();
}

function playHoverTile() {
    var aud = document.getElementById("hoverTile");
    aud.volume = 0.25;
    aud.play();
}

function playHoverLink() {
    var aud = document.getElementById("hoverLink");
    aud.volume = 0.25;
    aud.play();
}
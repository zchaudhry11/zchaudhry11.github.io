let timer = 0;

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

function playLinkClick() {
    var aud = document.getElementById("link");
    aud.play();
}

function playSelectClick() {
    var aud = document.getElementById("selectTile");
    aud.play();
}

function playArrowClick() {
    var aud = document.getElementById("arrow");
    aud.play();
}

function playReturnClick() {
    var aud = document.getElementById("return");
    aud.play();
}

function playHoverTile() {
    var aud = document.getElementById("hoverTile");
    aud.play();
}

function playHoverLink() {
    var aud = document.getElementById("hoverLink");
    aud.play();
}
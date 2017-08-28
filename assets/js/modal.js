const numProjects = 6;
let currTile = 1;
let $cellElems = '';

$(document).ready(function () {
	// Set carousel to inactive after it is initialized
	$('.expanded-content').toggleClass('inactive');
});

function getExpandedContent(tileNum) {
	playSelectClick();
	
	currTile = tileNum; // Set selected tile

	// Generate expanded content
	generateContent(tileNum);

	// Animate out tile containers
	disableTiles();

	// Animate in modal
	$('.expanded-content').toggleClass('inactive');
}

/**
 * Hide all tiles to make room for expanded content.
 */
function disableTiles() {
	// Disable project heading and arrows
	$('.projectType').toggleClass('inactive');
	$('#leftArrow').toggleClass('inactive');
	$('#rightArrow').toggleClass('inactive');

	// If current tile is a project tile, animate out projects
	if (currTile <= numProjects) {
		toggleInactive(".projectTile");
		$("#projects").addClass("inactive");
	} else { // Animate out art
		toggleInactive(".artTile");
		$("#artworks").addClass("inactive");
	}
}

/**
 * Sets tiles to default state.
 */
function resetTiles() {
	playReturnClick();

	// Reset project heading and arrows
	$('.projectType').toggleClass('inactive');
	randomTextEffect('.projectType');
	$('#leftArrow').toggleClass('inactive');
	$('#rightArrow').toggleClass('inactive');

	// Animate out modal
	$('.expanded-content').toggleClass('inactive');

	// Animate in tile containers
	if (currTile <= numProjects) { // If current tile is a project tile, animate in projects
		toggleInactive(".projectTile");
		$("#projects").removeClass("inactive");
	} else { // Animate in art
		toggleInactive(".artTile");
		$("#artworks").removeClass("inactive");
	}
}

/**
 * Generates content to fill modal based on tile number. Toggle inactive is done to reset carousel state
 */
function generateContent(tileNum) {
	$('.expanded-content').toggleClass('inactive');

	$('.carousel').flickity({
		// options
		wrapAround: true,
		//imagesLoaded: true,
		accessibility: true,
		draggable: true,
		setGallarySize: false
	  });

	switch(tileNum) {
		case 1:
			$('.content .title').text('GameLogger');
			$('.carousel').flickity( 'remove', $cellElems);
			$('.content .technologies').text('ASP.NET MVC, C#, Entity Framework, SQL Server 2016');
			$('.content .description').text('desc');	

			  $cellElems = $(
				"<img class=\"carousel-cell\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg\" alt=\"orange tree\" />" +
				"<img class=\"carousel-cell\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg\" alt=\"One World Trade\" />" +
				"<img class=\"carousel-cell\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg\" alt=\"drizzle\" />" +
				"<img class=\"carousel-cell\" src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg\" alt=\"cat nose\" />"
				);

			  $('.carousel').flickity( 'append', $cellElems);
			break;
		case 2:
			break;
		default:
		break;
	}
	$('.expanded-content').toggleClass('inactive');

	// Add sound to carousel clicks
	$(".flickity-prev-next-button").click(function() {
		playArrowClick();
	});

	$(".dot").click(function() {
		playArrowClick();
	});
}
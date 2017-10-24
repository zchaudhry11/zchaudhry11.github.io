const numProjects = 6;
let currTile = 1;
let $cellElems = '';

$(document).ready(function () {
	// Set carousel to inactive after it is initialized
	$('.expanded-content').toggleClass('inactive');
});

function getExpandedContent(tileNum) {
	//playSelectClick();
	
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
	//playReturnClick(); // play sound clip

	// Reset project heading and arrows
	$('.projectType').toggleClass('inactive');
	//randomTextEffect('.projectType');
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
		wrapAround: true,
		accessibility: true,
		draggable: true,
		setGallarySize: true
	  });

	switch(tileNum) {
		case 1:
			$('.carousel').show();
			$('.content .title').text('GameLogger');
			$('.carousel').flickity( 'remove', $cellElems);
			$('.content .technologies').text('HTML5, CSS3, JavaScript, Bootstrap, Highcharts, C#, ASP.NET MVC, ASP.NET Identity, Entity Framework, SQL Server 2016, Microsoft Azure');
			$('.content .description').text('GameLogger is a game management platform that allows users to track statistics and get notifications about their game libraries. ASP.NET Identity and OAuth 2.0 are used to securely register users and the Steam and IGDB APIs are used to aggregate every game owned by the user. The Twilio API is used to provide users with text message notifications about their games and there is also notification integration with Google Calendar');	
			$('.content .link').text("You can visit the site at http://gamelogger.us");
			$('.content .link').attr("href", "http://gamelogger.us");

			$cellElems = $(
			"<img class=\"carousel-cell\" src=\"assets/images/projects/gamelogger/gl1.jpg\" />" +
			"<img class=\"carousel-cell\" src=\"assets/images/projects/gamelogger/gl2.jpg\" />" +
			"<img class=\"carousel-cell\" src=\"assets/images/projects/gamelogger/gl3.jpg\" />"
			);

			$('.carousel').flickity('append', $cellElems);
			break;
		case 2:
			$('.carousel').show();
			$('.content .title').text('HowLongToBeat Scraper');
			$('.carousel').flickity( 'remove', $cellElems);
			$('.content .technologies').text('C#, HTMLAgilityPack');
			$('.content .description').text('HowLongToBeat.com is a website that tracks how long it takes people to complete specific games. I wrote a scraper in C# that gets all of this data for every game on the website and outputs a .csv file for further processing.');	
			$('.content .link').text("You can check it out here.");
			$('.content .link').attr("href", "http://github.com/zchaudhry11/HowLongToBeat-DataScraper");

			$cellElems = $(
				"<img class=\"carousel-cell\" src=\"assets/images/projects/hl2b/hl2b1.jpg\" />" +
				"<img class=\"carousel-cell\" src=\"assets/images/projects/hl2b/hl2b2.jpg\" />"
			);
	
			$('.carousel').flickity('append', $cellElems);
			break;
		case 3:
			$('.carousel').hide();
			$('.content .title').text('Auxo Garden');
			$('.content .technologies').text('NodeJS, ExpressJS, Sequelize, SQL Server 2016, AWS EC2');
			$('.content .description').text('Auxo Garden is an internet of things device designed to get beginners into gardening and promote sustainability. I created the backend which processes data obtained from a soil sensor and feeds the result into a hybrid mobile application created with Ionic 2. The OpenWeatherMap API is used to retrieve weather information for a user who can input the location of their garden and receive suggestions for plants that they can grow in their current location.');	
			$('.content .link').text("You can check it out here.");
			$('.content .link').attr("href", "http://github.com/zchaudhry11/Athena-public");
			break;
		case 4:
			$('.carousel').show();
			$('.content .title').text('Playable Hallway');
			$('.carousel').flickity( 'remove', $cellElems);
			$('.content .technologies').text('C#, Unity3D, 3D Studio Max, Maya, Photoshop');
			$('.content .description').text('Playable Hallway is a first-person horror adventure game built with C# and Unity3D. ');
			$('.content .link').text("You can check it out here.");
			$('.content .link').attr("href", "http://github.com/zchaudhry11/PlayableHallway-public");

			$cellElems = $(
				"<img class=\"carousel-cell\" src=\"assets/images/projects/ph/ph-thumb.jpg\" />" +
				"<img class=\"carousel-cell\" src=\"assets/images/projects/ph/ph1.jpg\" />" +
				"<img class=\"carousel-cell\" src=\"assets/images/projects/ph/ph2.jpg\" />"
			);
	
			$('.carousel').flickity('append', $cellElems);
			break;
		case 5:
			$('.carousel').show();
			$('.content .title').text('Hungry Samurai');
			$('.carousel').flickity( 'remove', $cellElems);
			$('.content .technologies').text('C#, Unity3D, Photoshop, Spriter');
			$('.content .description').text('Hungry Samurai is a 2.5D action game built with C# and Unity3D.');
			$('.content .link').text("You can check it out here.");
			$('.content .link').attr("href", "http://github.com/zchaudhry11/HungrySamurai");

			$cellElems = $(
				"<img class=\"carousel-cell\" src=\"assets/images/projects/hs/hs1.jpg\" />" +
				"<img class=\"carousel-cell\" src=\"assets/images/projects/hs/hs2.jpg\" />" +
				"<img class=\"carousel-cell\" src=\"assets/images/projects/hs/hs3.jpg\" />"
			);
	
			$('.carousel').flickity('append', $cellElems);
			break;
		case 6:
			$('.carousel').show();
			$('.content .title').text('Batting VR');
			$('.carousel').flickity( 'remove', $cellElems);
			$('.content .technologies').text('C#, Unity3D, VRTK, HTC Vive, 3D Studio Max, Photoshop');
			$('.content .description').text('Batting VR is a small virtual reality demo I made with C# and Unity3D. I specifically targeted the HTC Vive but the demo is built on top of VRTK so it should work fine with other VR HMDs such as the Oculus Rift. The player is able to pick up a bat and hit the baseballs that are launched in their direction.');
			$('.content .link').text("You can check it out here.");
			$('.content .link').attr("href", "http://github.com/zchaudhry11/BattingVR");

			$cellElems = $(
				"<img class=\"carousel-cell\" src=\"assets/images/projects/bvr/bvr1.jpg\" />" +
				"<img class=\"carousel-cell\" src=\"assets/images/projects/bvr/bvr2.jpg\" />" +
				"<img class=\"carousel-cell\" src=\"assets/images/projects/bvr/bvr-thumb.jpg\" />"
			);
	
			$('.carousel').flickity('append', $cellElems);
			break;
		case 7:
			$('.carousel').hide();
			$('.content .title').text("");
			$('.content .technologies').text("");
			$('.content .description').html('<img style=\"width:50%;height:50%;\" class=\"carousel-cell\" src=\"assets/images/artworks/sword.jpg\" />');
			$('.content .link').text("");
			break;
		case 8:
			$('.carousel').hide();
			$('.content .title').text("");
			$('.content .technologies').text("");
			$('.content .description').html('<img style=\"width:50%;height:50%;\" class=\"carousel-cell\" src=\"assets/images/artworks/dagger.jpg\" />');
			$('.content .link').text("");
			break;
		case 9:
			$('.carousel').hide();
			$('.content .title').text("");
			$('.content .technologies').text("");
			$('.content .description').html('<img style=\"width:50%;height:50%;\" class=\"carousel-cell\" src=\"assets/images/artworks/mat1.jpg\" />');
			$('.content .link').text("");
			break;
		case 10:
			$('.carousel').hide();
			$('.content .title').text("");
			$('.content .technologies').text("");
			$('.content .description').html('<img style=\"width:50%;height:50%;\" class=\"carousel-cell\" src=\"assets/images/artworks/mat2.jpg\" />');
			$('.content .link').text("");
			break;
		default:
		break;
	}
	$('.expanded-content').toggleClass('inactive');

	/*
	// Add sound to carousel clicks
	$(".flickity-prev-next-button").click(function() {
		playArrowClick();
	});

	$(".dot").click(function() {
		playArrowClick();
	});
	*/
}
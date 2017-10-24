const iterations = 5; // Number of times to select a random placeholder character
const effectDelay = 150;

let currPage = 0;

$(document).ready(function () {
    //randomTextEffect('.name');
    //randomTextEffect('.projectType');
});

/**
 * Apply the randomized text effect to a target selector.
 */
function randomTextEffect(target) {
    var targetText = "";
    var placeholder = "";
    var updatedString = "";

    targetText = $(target).text();
    var itr = 0;

    // Build placeholder string from target text
    for (var i = 0; i < targetText.length; i++) {
        setTimeout(function () {
            placeholder += targetText.charAt(itr);
            buildRandomizedString(target, updatedString, placeholder);
            itr++;
        }, effectDelay * i);
    }

    // Replace placeholder with complete target text
    setTimeout(function () {
        $(target).text(targetText);
    }, effectDelay * (targetText.length + 2));
}

/**
 * Sets target text to a placeholder string with a random character appended at the end.
 */
function buildRandomizedString(target, updatedString, placeholder) {
    for (var q = 0; q < iterations; q++) {
        setTimeout(function () {
            updatedString = placeholder + getRandChar();

            $(target).text(updatedString);
        }, 100 * q);
    }
}

/**
 * Gets and returns a random character from the characters array.
 */
function getRandChar() {
    var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='];

    return characters[Math.floor(Math.random() * ((characters.length - 1)))];
}

/**
 * Called by button click event. Updates the projectType class text to match the corresponding project type.
 */
function updateProjType(projType) {
    // Update heading
    $('.projectType').text(projType);
    //randomTextEffect('.projectType');

    // Animate tiles out
    if (projType == 'Artworks') {
        // If projects was the active tab then animate projects out, otherwise animate the contacts out
        if (!$("#projects").hasClass("inactive")) {
            toggleInactive(".projectTile");
            $("#projects").addClass("inactive");
        } else { // Contacts
            toggleInactive('.delayed');
            $("#contacts").addClass("inactive");
        }

        // Animate the artworks in
        $("#artworks").removeClass("inactive");
        toggleInactive(".artTile");
    } else if (projType == 'Projects') {
        // If artworks was the active tab then animate artwork out, otherwise animate contacts out
        if (!$("#artworks").hasClass("inactive")) {
            toggleInactive(".artTile");
            $("#artworks").addClass("inactive");
        } else { // Contacts
            toggleInactive('.delayed');
            $("#contacts").addClass("inactive");
        }

        // Animate the projects in
        $("#projects").removeClass("inactive");
        toggleInactive(".projectTile");
    } else if (projType == 'Contacts') {
        // If projects was the active tab then animate projects out, otherwise animate the artwork out
        if (!$("#projects").hasClass("inactive")) {
            toggleInactive(".projectTile");
            $("#projects").addClass("inactive");
        } else { // Artworks
            toggleInactive(".artTile");
            $("#artworks").addClass("inactive");
        }

        // Animate the contact information in
        $("#contacts").removeClass("inactive");

        // Animate contacts
        toggleInactiveDelayed('.delayed', 500, 100);
    }
}

/**
 * Changes the page of the card content. Page 0 is projects, Page 1 is artwork, Page 2 is contact information
 */
function changePage(direction) {
    //playArrowClick();

    // Cycle through pages based on which arrow is clicked
    currPage += direction;

    if (currPage >= 3) {
        currPage = 0;
    } else if (currPage <= -1) {
        currPage = 2;
    }

    // Update content based on current page
    if (currPage == 0) {
        updateProjType("Projects");
    } else if (currPage == 1) {
        updateProjType("Artworks");
    } else if (currPage == 2) {
        updateProjType("Contacts");
    }
}

/**
 * Toggles the visiblity state of all selected tags.
 */
function toggleInactive(selector) {
    $(selector).each(function () {
        $(this).toggleClass("inactive");
    });
}

/**
 * Toggles the visiblity state of all selected tags with input delay.
 */
function toggleInactiveDelayed(selector, delay, initialDelay) {
    $(selector).each(function (index) {
        var $this = $(this);

        setTimeout(function() {
            $this.toggleClass("inactive");
        }, (index*delay + initialDelay));
    });
}

function toggleCover() {
    $('#cover').toggleClass('.cover-transform');
}
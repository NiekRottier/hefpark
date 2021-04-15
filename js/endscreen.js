window.addEventListener('load', init);

// GLOBALS
let homeButton = document.getElementById("homeButton")
let playAgainButton = document.getElementById("playAgainButton")

function init() 
{
    homeButton.addEventListener("click", () => window.location.replace("index.html"))
    playAgainButton.addEventListener("click", () => window.location.replace("roomcode.html"))
}
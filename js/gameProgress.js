window.addEventListener('load', init);

// GLOBALS
let stopButton = document.getElementById("stopButton")
let popUp = document.getElementById("pop-up")
let confirmButton = document.getElementById("endGame")
let declineButton = document.getElementById("continueGame")

function init() 
{
    stopButton.addEventListener("click", () => popUp.style.display = "flex")
    confirmButton.addEventListener("click", () => window.location.replace("endscreen.html"))
    declineButton.addEventListener("click", () => popUp.style.display = "none")
}
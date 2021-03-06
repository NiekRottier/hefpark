window.addEventListener('load', init);

// GLOBALS
let playerNames = ["Phineas", "Ferb", "Spongebob", "Patrick", "Octo", "Sandy", "Krabs", "Peppa", "Dora", "Diego",
    "Aang", "Katara", "Sokka", "Elmo", "Koekiemonster", "Shrek", "Donkey",
    "Po", "Shifu", "Skipper", "Kowalski", "Junior", "Rico", "Gru"];
let playerAmount;
let params = new URLSearchParams(location.search);
let selectedGm = params.get('gm');
console.log("Gamemode = " + params.get('gm'));

let playerSetup = document.getElementById('playerSetup');
let startButton = document.getElementById('startButton');

function init()
{
    if (selectedGm === '2' || selectedGm === '3'){
        playerAmount = 4;
    } else if (selectedGm === '1'){
        playerAmount = 2
    }

    for (let i = 0; i < playerAmount; i++){
        let x = Math.random()*playerNames.length;
        let pCreate = document.createElement('p');
        pCreate.innerHTML = playerNames[Math.floor(x)];
        playerSetup.appendChild(pCreate);
        console.log(playerNames[Math.floor(x)])

        // Remove used playername from array
        let index = playerNames.indexOf(playerNames[Math.floor(x)]);
        if (index !== -1) {
            playerNames.splice(index, 1);
        }
    }

    startButton.addEventListener("click", () => window.location.replace("gameProgress.html"))
}
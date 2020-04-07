window.addEventListener('load', init);

// GLOBALS
let playerName = ["Phineas", "Ferb", "Spongebob", "Patrick", "Octo", "Sandy", "Krabs", "Peppa", "Dora", "Diego",
    "Aang", "Katara", "Sokka", "Elmo", "Koekiemonster", "Shrek", "Donkey",
    "Po", "Shifu", "Skipper", "Kowalski", "Junior", "Rico", "Gru"];
let playerAmount;
let params = new URLSearchParams(location.search);
let selectedGm = params.get('gm');
let pCreate = document.createElement('p');
let playerSetup = document.getElementById('playerSetup');


function init()
{


if (selectedGm === '1' || selectedGm === '3'){
    playerAmount = 4;
} if (selectedGm === '2'){
    playerAmount = 2
}

for (let i = 0; i < playerAmount; i++){
    let x = Math.random()*playerName.length;
    pCreate.innerHTML = playerName[Math.floor(x)];
    playerSetup.appendChild(pCreate);
    console.log(playerName[Math.floor(x)])
}



}


console.log(params.get('gm'));
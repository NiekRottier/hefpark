window.addEventListener('load', init);

function init()
{
// GLOBALS
let gmGallery = document.getElementById(`gmGallery`);
let gm1 = document.getElementById('gm1');
let gm2 = document.getElementById('gm2');
let gm3 = document.getElementById('gm3');

for (let i=1; i<4; i++){
    gmGallery.addEventListener('click', selectGm);
}

function selectGm(e){
    gm1.classList.remove('selectedGm');
    gm2.classList.remove('selectedGm');
    gm3.classList.remove('selectedGm');
    if (e.target === gm1 || e.target === gm2 || e.target === gm3){
        e.target.classList.add('selectedGm');
    } else{
        e.target.parentElement.classList.add('selectedGm');
    }

}
}
window.addEventListener('load', init);

function init(){
// GLOBALS ?
let roomcodeText = document.getElementById(`userRoomcode`);
let roomcodeSubmit = document.getElementById(`submitRoomcode`);


for (let i=0; i<10; i++){ // Add functionality to buttons 9-0
    let roomcodeButtons = document.getElementById(`button${i}`);
    roomcodeButtons.addEventListener('click', function typeNumber(){
        console.log(`Button ${i} has been pressed`);
        roomcodeText.value = roomcodeText.value + i;
    })
}

roomcodeSubmit.addEventListener('click', validateRoomcode);

function validateRoomcode(){
    if (roomcodeText.value === `123456`){
        window.location.replace("gmSetup.html");
    } else {
        console.log(roomcodeText.value);
        let errMsg = document.getElementById(`errMsg`);
        errMsg.innerHTML = `De ingevulde roomcode klopt niet`;
    }
}
}
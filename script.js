const theCard = document.getElementById("theCard");
const frontFaceScreen = document.getElementById("frontFaceScreen");
const easyLevel = document.getElementById("easyLevel");
const leftCardEasy = document.getElementById("leftCardEasy");
const rightCardEasy = document.getElementById("rightCardEasy");
const lowerCardEasy = document.getElementById("lowerCardEasy");


frontFaceScreen.style.display = "flex";
easyLevel.style.display = "none";

function normalFlip(idTarget) {
    idTarget.style.transform = "rotateY(-180deg)";
    setTimeout(() => {
    if (idTarget === leftCardEasy) {
        rightCardEasy.style.transform = "rotateY(-180deg)";
        lowerCardEasy.style.transform = "rotateY(-180deg)";
    }
    else if (idTarget === rightCardEasy) {
        leftCardEasy.style.transform = "rotateY(-180deg)";
        lowerCardEasy.style.transform = "rotateY(-180deg)";
    }
    else if (idTarget === lowerCardEasy) {
        leftCardEasy.style.transform = "rotateY(-180deg)";
        rightCardEasy.style.transform = "rotateY(-180deg)";
    }
},1000)
        




}

function flipAll() {


}

function flip() {
    
    theCard.style.transform = "rotateY(-180deg)"
    setTimeout(()=>{
    frontFaceScreen.style.display = "none";
    easyLevel.style.display = "flex";
     theCard.style.transform = "rotateY(0deg)"},1000)
    




}
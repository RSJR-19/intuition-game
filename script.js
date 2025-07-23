const theCard = document.getElementById("theCard");
const frontFaceScreen = document.getElementById("frontFaceScreen");
const easyLevel = document.getElementById("easyLevel");
const leftCardEasy = document.getElementById("leftCardEasy");
const rightCardEasy = document.getElementById("rightCardEasy");
const lowerCardEasy = document.getElementById("lowerCardEasy");
const leftCardFront = document.getElementById("leftCardFront");
const rightCardFront = document.getElementById("rightCardFront");
const lowerCardFront = document.getElementById("lowerCardFront")


frontFaceScreen.style.display = "flex";
easyLevel.style.display = "none";

makeDiamond()


function makeDiamond() {
    let diamond = document.createElement("div");
    diamond.style.width = "25px";
    diamond.style.height = "25px";
    diamond.style.border = "0.5px black solid";
    diamond.style.transform = "rotate(45deg)";
    diamond.style.backgroundColor = "red";
    

    let randomizer = (Math.floor(Math.random()*3) + 1);
    if (randomizer === 1) {
        leftCardFront.appendChild(diamond);
        console.log("ha")
    }
    else if (randomizer === 2) {
        rightCardFront.appendChild(diamond);
        console.log("yo")
    
    }
    else if (randomizer === 3) {
        lowerCardFront.appendChild(diamond);
        console.log("go")
    
    }

}



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
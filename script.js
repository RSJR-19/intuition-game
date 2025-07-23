const theCard = document.getElementById("theCard");
const frontFaceScreen = document.getElementById("frontFaceScreen");
const easyLevel = document.getElementById("easyLevel");


frontFaceScreen.style.display = "flex";
easyLevel.style.display = "none";

function flip() {
    
    theCard.style.transform = "rotateY(-180deg)"
    setTimeout(()=>{
    frontFaceScreen.style.display = "none";
    easyLevel.style.display = "flex";
     theCard.style.transform = "rotateY(0deg)"},1000)
    




}
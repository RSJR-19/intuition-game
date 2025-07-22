const theCard = document.getElementById("theCard");

function flip() {
    
    theCard.style.transform = "rotateY(-180deg)"
    setTimeout(()=>{
     theCard.style.transform = "rotateY(0deg)"},1000)
     console.log("yeo")




}
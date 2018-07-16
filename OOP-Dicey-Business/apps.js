diceArray = [];
$(document).ready( function (){
class Dice {
    constructor (){
        
        this.div = document.createElement("div");
        this.div.style.backgroundColor = "white";
        this.div.style.width = "100px";
        this.div.style.height = "100px";
        this.div.style.marginLeft = "10px";
        this.div.style.marginTop = "10px";
        this.div.style.cssFloat = "left";
        this.div.style.fontSize = "50px";
        this.div.style.textAlign = "center";
        this.div.style.color = "black";
        this.div.style.border = "solid black";
        this.div.className = "dice";

        this.rollDie()
        this.div.addEventListener('click', () => {
            this.rollDie();
        })
        this.div.addEventListener('dblclick', () => {
            this.removeDie();
        })

        $(`.container-fluid`).append(this.div);
    }

    rollDie() {
        this.div.innerText = randomval(1,7)
        console.log(`The Die was rolled and it turn up ${this.div.innerText}`);
    }

    removeDie() {
        this.div.remove();
        let removedindex = diceArray.indexOf(this);
        diceArray.splice(removedindex,1);
    }
}
$(`#createButton`).click(insertDie);
$(`#rollAll`).click(rollAllDice);
$(`#sumRolls`).click(sumAllRolls);

function insertDie () {
let d = new Dice ()
diceArray.push(d);
console.log(diceArray);

}
function rollAllDice () {
    if (diceArray.length === 0) {
        alert(`There is no die to roll`)
    } else 
    for (a=0; a<diceArray.length; a++){
diceArray[a].rollDie();
 }
}
function sumAllRolls () {
    let sum = 0
    for (a=0; a<diceArray.length; a++){
   sum = sum + +diceArray[a].div.innerText;
    }
    if (diceArray.length === 0) {
        alert(`There is nothing to Sum`)
    } else if (diceArray.length === 1) {
        alert(`The sum of this die is ${sum}.`)
    } else {
    alert(`The sum of all ${diceArray.length} Dice is ${sum}.`)
   }
}
})

    
function randomval (max, min) {
 return (Math.floor(Math.random()*(max-min)+min))
}
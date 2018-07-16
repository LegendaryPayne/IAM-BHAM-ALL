document.addEventListener("DOMContentLoaded", function() {

});

function startSinging() {

let friends = ["Kira","Payne","Jimmie","Legendary", "Jay"];

let i = 0;

while (i < friends.length) {
friendDiv = document.createElement("div");
friendH3 = document.createElement("h3");
friendDiv.className = "friend";
friendH3.id = friends[i];
document.body.appendChild(friendDiv);
friendtext = document.createTextNode(friends[i]+":");
friendDiv.appendChild(friendH3);
friendH3.appendChild(friendtext);
        howManyMore (i);
    i++;
}
 function howManyMore (c) {
    for(let num=0; num < 99;num++){
        singingP = document.createElement("p")
        friendDiv.appendChild(singingP);
        if (99-num === 1){
            songText = document.createTextNode ((99-num) +" line of code in the file, " + (99-num) + " line of code; " + friends[c] + " strikes one out, clears it all out, no more lines of code in the file.")
            singingP.appendChild(songText);
    } else if (99-num === 2){
        songText = document.createTextNode ( (99-num) +" lines of code in the file, " + (99-num) + " lines of code; " + friends[c] + " strikes one out, clears it all out, " + (98-num) + " line of code in the file.")
        singingP.appendChild(songText);
    } else {
        songText = document.createTextNode ( (99-num) +" lines of code in the file, " + (99-num) + " lines of code; " + friends[c] + " strikes one out, clears it all out, " + (98-num) + " lines of code in the file.")
        singingP.appendChild(songText);
 

    }
 }
}
}
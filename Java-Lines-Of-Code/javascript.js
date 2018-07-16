var friends = ["Kira","Payne","Jimmie","Legendary", "Jay"];

var i = 0;

while (i < friends.length) {
    console.log(friends[i]+":")
        howManyMore (i);
    i++;
}
 function howManyMore (c) {
    let num = 0;
    for(let num=0; num < 99;num++){
        if (99-num === 1){
        console.log( (99-num) +" line of code in the file, " + (99-num) + " line of code; " + friends[c] + " strikes one out, clears it all out, no more lines of code in the file.");
    } else if (99-num === 2){
        console.log( (99-num) +" lines of code in the file, " + (99-num) + " lines of code; " + friends[c] + " strikes one out, clears it all out, " + (98-num) + " line of code in the file.");
    } else {
        console.log( (99-num) +" lines of code in the file, " + (99-num) + " lines of code; " + friends[c] + " strikes one out, clears it all out, " + (98-num) + " lines of code in the file.");
    }
 }
}

var name = "Jimmie";
const states = 50;
var sum = (5 + 4);

var vegetables = ["Carrots", "Beans", "Tomatos", "Onions", "Peppers"];
var howLong = vegetables.length;
for (let i = 0; i < howLong; i++) {
    console.log(vegetables[i]);
}
let people = [
    {
        name: "Janice",
        age: 19,
    },
    {
        name: "John",
        age: 20,
    },
    {
        name: "Joy",
        age: 21,
    },
    {
        name: "Jay",
        age: 22,
    },
    {
        name: "Johnny",
        age: 23,
    },
];
for (let i = 0; i < people.length; i++) {
    val1 = people[i];
    console.log(val1);
    oldEnough(val1.name, val1.age)
}
// The Age Check:
function oldEnough(name, age) {

    if (age >= 21) {
        console.log("Welcome to the club, " + name + ".");
        // If Not:
    } else {
        console.log("Sorry " + name + " You are not Allow In");
    }
}
sayHello()

function sayHello() {
    alert("Hello World")
}
let even = "Even";
let odd = "odd";

getLength(even)
getLength(odd)

function getLength(x) {
    let y = x.split("");
    if (y.length % 2 === 0) {
        console.log("The World is Nice and Even!");
    } else {
        console.log("Thw World is an Odd Place!")
    }
}
// The Age Check:
function areYouOldEnough() {
    // Pulls Age Information:
    let y = document.getElementById("age").value;
    // Pulls Name:
    let z = document.getElementById("name").value;
    // Check to See If Age is Higher than 21:
    // If So:
    if (y => 21) {
        return "Welcome to the club, " + z + ".";
        // If Not:
    } else {
        return "Sorry " + z + "You are not Allow In";
    }
}
// Name Check:
function yourPlaceInLine() {
    // Pulls Name:
    var x = document.getElementById("name").value;
    // Give the first character a number:
    var test = x.charCodeAt(0);
    // Log to Console:
    console.log(test)
    // Check to See if FirstName order is lower then starting with L:
    if (test >= 76) {
        // If so:
        return "You are next in line"
        // If not:
    } else {
        return "Move to the back of the line";
    }
}

// Name Check:
function placeInLine(x) {
    // Give the first character a number:
    var test = x.charCodeAt(0);
    // Log to Console:
    console.log(test)
    // Check to See if FirstName order is lower then starting with L:
    if (test >= 76) {
        // If so:
        alert("You are next in line");
        // If not:
    } else {
        alert("Move to the back of the line");
    }
}
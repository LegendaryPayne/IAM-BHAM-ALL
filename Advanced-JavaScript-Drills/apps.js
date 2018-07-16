setName();
function setName() {
  var name = "Jimmie Lee Payne III";
  console.log(name); // first
}

console.log("some text"); //-- second

let avg = findAvg(2, 2);

console.log("some text", avg); //--fourth

function findAvg(a, b) {
  console.log("some text"); //-- third
  var answer = (a + b) / 2;
  return answer;
}
let fruits = ["apple", "tomato", "banana"];
let leastFav = fruits[1];
function printFruits() {
  let favFruit = fruits[2];
  console.log(fruits[0]);
  function printFavFruit() {
    console.log(favFruit);
  }
  printFavFruit();
  console.log(leastFav);
}

printFruits();

test();
function test() {
console.log('Hello')
}

let alert1 = function() {
alert('does work');
}
alert1()
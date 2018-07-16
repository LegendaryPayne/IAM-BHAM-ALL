 let favMovie = (movie = 'The Room', name = 'World') => console.log(`my name is ${name}, and my favorite movie is ${movie}`);

favMovie()
let fullName = 'Jimmie Payne'
let getFirstName = (name='testing this') => { 
    let [ firstName, lastName ] = [...name.split(" ")];
    console.log(firstName)
}
getFirstName(fullName);

let getFirstName2 = (name = 'testing this') => console.log(name.split(" ")[0]);

getFirstName2(fullName);

let workingWithTwo = (x,y) =>  {
let sum = `the sum of ${x} and ${y} is ${x + y}`;
let squared = [`${x} squared is ${x*x}`, `${y} squared is ${y*y}`]
    return {
    sum: sum,
    squared: squared, 
     }

}

console.log(workingWithTwo(2,3))

let workingWithThree = (x,y,z) => console.log(`How is ${x} and ${y} have anything to do with ${z}?`);

let randomThree = ['public speaking', 'mountain climbing', 'coding'];

workingWithThree(...randomThree);

let howManyLetters = (word ='test') => { 
    letters = [...word]
    for(i=0; i<(letters.length); i++) { 
        console.log(letters[i])
    }
}

howManyLetters()
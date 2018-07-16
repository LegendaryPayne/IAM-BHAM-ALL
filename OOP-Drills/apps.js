// Write 5 object literals, have them named person1-person5. Give each a name property and have this be a name of a friend or family member. Then give each one a second property, sayHello, which is a function that will console log the string “Hello! My name is ________”.
// Call the sayHello function on each object and check the console for a response.
let person1 = {
    name: 'Jay',
    sayHello:  function() {console.log(`Hello! My name is ${this.name}.`)}
}
let person2 = {
    name: 'Jimmie',
    sayHello:  function() {console.log(`Hello! My name is ${this.name}.`)}
}
let person3 = {
    name: 'Kira',
    sayHello:  function() {console.log(`Hello! My name is ${this.name}.`)}
}
let person4 = {
    name: 'Legendary',
    sayHello:  function() {console.log(`Hello! My name is ${this.name}.`)}
}
let person5 = {
    name: 'Payne',
    sayHello:  function() {console.log(`Hello! My name is ${this.name}.`)}
}
person1.sayHello()
person2.sayHello()
person3.sayHello()
person4.sayHello()
person5.sayHello()

// This seems kind of repetitive doesn't it? Yeah, let’s practice some pseudo classes. Create a constructor function that will take a name, city, and age. (Remember, pseudo classes look like functions but are named with starting with a capital letter ex: function Example() null).
// Write a method that will print a string similar to this “Hey! My name is ___ I am __ years old and live in __”.
// Create 5 instances of the same friends from step 1, except this time use the pseudo class and method we just created.

function Person(name, age, city) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
}

let p1 = new Person(`Jay`, 19, `Birmingham`);
let p2 = new Person(`Jimmie`, 20, `H.F.I.L.`);
let p3 = new Person(`Kira`, 21, `Mount Olympus`);
let p4 = new Person(`Legendary`, 22, `Twitter`);
let p5 = new Person(`Payne`, 23, `your mind`);

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

// Using the ES6 syntax makes object oriented programming in javascript much easier to understand. Let’s use the ES6 syntax and create the same class that we just did. (Hint: ES6 classes are not made using a constructor function, they use a keyword: class. They have a constructor which is used to take in the parameters name, city, and age. And methods will not need to be prototypes!).

class Person1 {
    constructor (name, age, city){
        this.name = name;
        this.city = city;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
    }
}

let pn1 = new Person1(`Jay`, 19, `Birmingham`);
let pn2 = new Person1(`Jimmie`, 20, `H.F.I.L.`);
let pn3 = new Person1(`Kira`, 21, `Mount Olympus`);
let pn4 = new Person1(`Legendary`, 22, `Twitter`);
let pn5 = new Person1(`Payne`, 23, `your mind`);

pn1.sayHello();
pn2.sayHello();
pn3.sayHello();
pn4.sayHello();
pn5.sayHello();

// Inheritance
// Create a class called vehicle, not every vehicle is a truck, nor is it a sedan, motorcycle, or coupe.
// So let’s define a vehicle in a way that we can use inheritance to determine if it is a truck, sedan, or motorcycle.
// All vehicles have wheels, some have 2 some have 4. Not all have doors, and not all have reverse.
// So to keep it simple lets have this vehicle class construct an object that only has the properties manufacturer and number of wheels.
// Include a method called aboutVehicle, have it console log a string which will say what type of vehicle it is, who made it, and how many wheels it has.
// Trucks are vehicles, they have wheels. So let’s create a vehicle class that inherits the property of wheels from vehicle, but trucks have doors (unlike motorcycles) and they have a truck bed. So let’s add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.
// Now sedans are vehicles also, but they don’t have a truck bed (We’re ignoring the fact El Caminos broke this rule), they do have doors as well as 4 wheels. So to practice inheritance, lets just say sedans are vehicles, they aren’t trucks because they don’t have a truck bed but they get good gas mileage. Create a class sedan which extends vehicle, give it an additional property of size which could be small or medium, and give it a property of mpg.
// Motorcycles are also vehicles, but they don’t have doors, or 4 wheels, or go in reverse (technically). So create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.
// Each child class inherited the method which was created in vehicle, but each child class now has other specific features which define it. Update the method in each child class to console log a string that represents these features, but still have it tell is the type, manufacturer and how many wheels it has!

class Vehicle {
    constructor (manufacturer, numberOfWheels){
        this.manufacturer = manufacturer;
        this.numberOfWheels = numberOfWheels;
    }

    aboutVehicle() {
        console.log(`This vehicle is produce by ${this.manufacturer}, and has ${this.numberOfWheels} wheels`);
    }
}
class VehicleTrucks extends Vehicle {
    constructor(manufacturer, numberOfWheels, numberOfDoors, haveBed){
        super(manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.haveBed = haveBed
    }
    aboutVehicle() {
        console.log(`This vehicle is produce by ${this.manufacturer}, and has ${this.numberOfWheels} wheels. This vechile also has ${this.numberOfDoors} doors, and it ${this.haveBed} have a bed.`);
    }
}
class VehicleSedan extends Vehicle {
    constructor(manufacturer, numberOfWheels, numberOfDoors, size, mpg){
        super(manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This vehicle is produce by ${this.manufacturer}, and has ${this.numberOfWheels} wheels. This vechile also has ${this.numberOfDoors} doors, and it miles per gallon is ${this.mpg}. The size of  this vehicle is ${this.size}`);
    }
}
class Motorcycle extends Vehicle {
    constructor(manufacturer, numberOfWheels, typeOfSteering, numberOfDoors){
        super(manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.typeOfSteering = typeOfSteering;
    }
    aboutVehicle() {
        console.log(`This vehicle is produce by ${this.manufacturer}, and has ${this.numberOfWheels} wheels. This vechile also has ${this.numberOfDoors} doors, and it uses ${this.typeOfSteering}.`);
    }
}
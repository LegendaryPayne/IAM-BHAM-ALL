shapeArray = [];

class Shape {
    constructor (name){
        this.name = name;
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        // this.div.style.marginTop = `${randomval(0,600)}px`;
        // this.div.style.marginLeft = `${randomval(0,600)}px`;
        this.div.style.backgroundColor = getRandomColor();
        this.div.style.fontSize = "50px";
        this.div.style.textAlign = "center";
        // this.div.style.color = "black";
        // this.div.style.border = "solid black";
        this.div.className = "shape";
        this.div.addEventListener('dblclick', () => {
            this.removeShape();
        })
        $(`.canvas`).append(this.div);
    }
    removeShape() {
        this.div.remove();
        $('span').empty();
        let removedindex = shapeArray.indexOf(this);
        shapeArray.splice(removedindex,1);
    }
}

class Rectangle extends Shape  {
    constructor(name, height, width) {
        super(name);
        this.height = height;
        this.width = width;
        this.div.style.marginTop = `${randomval((0),(600-(+height)))}px`;
        this.div.style.marginLeft = `${randomval((0),(600-(+width)))}px`;
        this.div.style.width = `${+height}px`;
        this.div.style.height = `${+width}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        })
    }
    describe() {
        $('span').empty();
        $(`#1`).append(this.name);
        $(`#2`).append(this.width);
        $(`#3`).append(this.height);
        $(`#4`).append(`Not A Circle`);
        $(`#5`).append(Math.round(this.height*this.width));
        $(`#6`).append(Math.round((2*this.height) + (2*this.width)));
    }
}

class Square extends Shape  {
    constructor(name, length) {
        super(name);
        this.length = length;
        this.div.style.marginTop = `${randomval(0,600-(+length))}px`;
        this.div.style.marginLeft = `${randomval(0,600-(+length))}px`;
        this.div.style.width = `${+length}px`;
        this.div.style.height = `${+length}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        })
    }
    describe() {
        $('span').empty();
        $(`#1`).append(this.name);
        $(`#2`).append(this.length);
        $(`#3`).append(this.length);
        $(`#4`).append(`Not A Circle`);
        $(`#5`).append(Math.round(Math.pow(this.length, 2)));
        $(`#6`).append(Math.round(4*this.length));
    }
}

class Circle extends Shape  {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
        this.div.style.marginTop = `${randomval(0,600-(radius*2))}px`;
        this.div.style.marginLeft = `${randomval(0,600-(radius*2))}px`;
        this.div.style.width = `${radius*2}px`;
        this.div.style.height = `${radius*2}px`;
        this.div.style.borderRadius = `100%`;
        this.div.addEventListener('click', () => {
            this.describe();
        })
    }
    describe() {
        $('span').empty();
        $(`#1`).append(this.name);
        $(`#2`).append(`None, This is a Circle`);
        $(`#3`).append(`None, This is a Circle`);
        $(`#4`).append(this.radius);
        $(`#5`).append(Math.round((Math.PI)*(Math.pow(this.radius,2))));
        $(`#6`).append(Math.round(2*this.radius*(Math.PI)));
    }
}

class Triangle extends Shape  {
    constructor(name, length) {
        super(name);
        this.length = length;
        this.div.style.marginTop = `${randomval(0,600-(+length))}px`;
        this.div.style.marginLeft = `${randomval(0,600-(+length))}px`;
        this.div.style.width = `0px`;
        this.div.style.height = `0px`;
        this.div.style.backgroundColor = `transparent`;
        let x = getRandomColor();
        this.div.style.borderLeft = `${(+length)/2}px solid ${x}`;
        this.div.style.borderRight = `${(+length)/2}px solid transparent`;
        this.div.style.borderTop = `${(+length)/2}px solid transparent`;
        this.div.style.borderBottom = `${(+length)/2}px solid ${x}`;
        this.div.addEventListener('click', () => {
            this.describe();
        })
    }
    describe() {
        $('span').empty();
        $(`#1`).append(this.name);
        $(`#2`).append(this.length);
        $(`#3`).append(this.length);
        $(`#4`).append(`Not A Circle`);
        $(`#5`).append(Math.round((Math.pow(this.length, 2))/2));
        $(`#6`).append(Math.round(Math.sqrt(2*(Math.pow(this.length, 2)))));
    }
}
$(document).ready( function (){

$(`#SubmitRectangle`).click(insertRectangle);
$(`#SubmitSquare`).click(insertSquare);
$(`#SubmitCircle`).click(insertCircle);
$(`#SubmitTriangle`).click(insertTriangle);
$(`#clearAll`).click(clear);


    function insertRectangle () {
        let h = document.getElementById("rHeight").value;
        let w = document.getElementById("rWidth").value;

        let rect = new Rectangle ('Rectangle', w, h)
        shapeArray.push(rect);
        console.log(shapeArray);
    }
    function insertTriangle () {

        let th = document.getElementById("height").value;

        let tri = new Triangle ('Triangle', th)
        shapeArray.push(tri);
        console.log(shapeArray);
    }
    function insertSquare () {

        let l = document.getElementById("Length").value;

        let sq = new Square ('Square', l)
        shapeArray.push(sq);
        console.log(shapeArray);
    }
    function insertCircle () {

        let r = document.getElementById("radius").value;

        let cir = new Circle ('Circle', r)
        shapeArray.push(cir);
        console.log(shapeArray);
    }
    function clear () {
        $(`.canvas`).empty();
        shapeArray = [];
    }
})
function test () {
    console.log(this)
}
function randomval (max, min) {
    return (Math.floor(Math.random()*(max-min)+min))
   }

   function getRandomColor() {
    let letters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}

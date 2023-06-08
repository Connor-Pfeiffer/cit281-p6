/*
    CIT 281 Project 6
    Name: Connor Pfeiffer
*/

class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }
    perimeter() {return (this.sides.length) ? this.sides.reduce((a, b) =>  a + b) : 0;}
}
//console.log(new Shape([5, 10]).perimeter());  // 15
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
//console.log(new Shape().perimeter()); // 

class Rectangle extends Shape{
    constructor(length = 0, width = 0) {
        super();
        this.length = length;
        this.width = width;
        this.sides = [this.length, this.width, this.length, this.width];
    }
    area() {return (this.sides.length) ? this.length * this.width : 0;}
}
//console.log(new Rectangle(4, 4).perimeter());  // 16
//console.log(new Rectangle(4, 4).area());  // 16
//console.log(new Rectangle(5, 5).perimeter()); // 20
//console.log(new Rectangle(5, 5).area()); // 25
//console.log(new Rectangle().perimeter()); // 0
//console.log(new Rectangle().area()); // 0

class Triangle extends Shape{
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.sides = [this.sideA, this.sideB, this.sideC];
        this.s = ( (this.sideA + this.sideB + this.sideC) / 2)
    }
    area() {return (this.sides.length) ? Math.sqrt(this.s * (this.s - this.sideA) * (this.s - this.sideB) * (this.s- this.sideC)) : 0;}
}
//console.log(new Triangle(3, 4, 5).perimeter());  // 12
//console.log(new Triangle(3, 4, 5).area());  // 6
//console.log(new Triangle().perimeter()); // 0
//console.log(new Triangle().area()); // 0

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
let shapeSides = null;
for (shapeSides in data) {
    switch(data[shapeSides].length) {
    case 2:
        console.log(`${((data[shapeSides][0] == data[shapeSides][1]) ? 'Square' : 'Rectangle')} with sides ${data[shapeSides].toString()} has a perimeter of ${new Rectangle(...data[shapeSides]).perimeter()} and area of ${new Rectangle(...data[shapeSides]).area()}`);
        break;
    case 3:
        console.log(`Triangle with sides ${data[shapeSides].toString()} has a perimeter of ${new Triangle(...data[shapeSides]).perimeter()} and area of ${new Triangle(...data[shapeSides]).area()}`);
        break;
    default:
        console.log(`Shape with ${data[shapeSides].length} ${((data[shapeSides].length == 1) ? 'side' : 'sides')} is unsupported`);
        break;
    }
}
// const a = 10;
// const b = 20;
// // let result;
// // if (a > b) {
// //   result = 'Good';
// // } else {
// //   result = 'Bad';
// // }
// const result = a > b ? 'Good' : 'Bad';
// console.log(result);

// const mark = parseInt(prompt('Enter mark'));
// let result;
// switch (mark) {
//     case 5: 
//         result = 'Excellent';
//         break;
//     case 4: 
//         result = 'Good';
//         break;
//     case 3: 
//         result = 'Satisfactory';
//         break;
//     case 2: 
//         result = 'Bad';
//         break;
//     default: 
//         result = 'Wrong mark';
//         break;
// }
// console.log(result);

// for (let i = 2; i <= 10; i++) {
//     if (i % 2) {
//         continue;   
//     }
//     console.log(i);
// }

// let correctInput = false;
// let a;
// while (!correctInput) {
//     a = Number(prompt('Input A'));
//     if (!isNaN(a) && a !== 0) {
//         correctInput = true;
//     } else {
//         alert('You entered incorrect value, please try again')
//     }
// }

// let cars = [];
// cars.push('Tesla Model X');
// cars.push('Volkswagen Terramont');
// console.log(cars.length);
// console.log(cars[0]);
// cars[2] = 'Ferrari LaFerrari';
// console.log(cars.length);
// cars[10] = 'Agera R';
// console.log(cars.length);
// console.log(cars);

// let counter = 0;
// // for (let i = 0; i < cars.length; i++) {
// //     if (cars[i] !== undefined) {
// //         counter++;
// //     }
// // }
// cars.forEach( el => {
//     counter++;
//     console.log(el);
// } );
// console.log('Actual count', counter);



let favCars = {};
favCars['fasters'] = 'Agera R';
favCars['mostExpensive'] = 'Bugatti Chiron';
favCars['mostComfortable'] = 'Rolls-Royce Phantom';

console.log(favCars['mostComfortable']);

for (let key in favCars) {
    console.log(favCars[key]);
}


let bugattiVeyron = {};
bugattiVeyron.make = 'Bugatti';
bugattiVeyron.title = 'Veyron';
bugattiVeyron.speed = 408;
bugattiVeyron.drive = function () {
    console.log(this.title + 'is driving!');
}




let zazLanos = {};
zazLanos.make = 'ZAZ';
zazLanos.title = 'Lanos';
zazLanos.speed = 175;
zazLanos.drive = function () {
    console.log(this.title + 'is driving!');
}

zazLanos.drive();


function Car (make, title, speed) {
    this = {};
    this.make = make;
    this.title = title;
    this.speed = speed;
    this.drive = drive = function() {
        console.log(this.title + 'is driving');
    }
    return this;
}

let skodaKodiaq = new Car('Skoda', 'Kodiaq', 200);
skodaKodiaq.drive();


let skodaKaroq = new Car('Skoda', 'Karoq', 200);
skodaKaroq.drive();


let audiQ7 = {
    make: 'Audi',
    title: 'Q7',
    speed: 250,
    drive() {
        console.log(this.title + ' is driving!');
    }
}

audiQ7.drive();


class NewCar {
    constructor(make, title, speed) {
        this.make = make;
        this.title = title;
        this.speed = speed;
    }
    drive() {
        console.log(this.title + ' is driving!');
    }
}

let bmwX7 = new NewCar('BMW', 'X7', 250);

bmwX7.drive();

let bmwX4 = Object.create(bmwX7);
bmwX4.title = 'X4';
bmwX4.drive();
















function diskriminans(a, b, c) {
    let d = (b * b) - (4 * a * c);
    return d;
}

function quadraticEquation(a, b, c, d) {
    if (d > 0) {
        let decision1 = (-(b) + Math.sqrt(d)) / (a * 2);
        let decision2 = (-(b) - Math.sqrt(d)) / (a * 2);
        return "<br>= " + decision1 + "<br>= " + decision2;
    } else if (d == 0) {
        let decision = (-b) / (a * 2);
        return decision;
    } else {
        return "no decision";
    }
}

//start 
let a = Number(prompt("A: "));
let b = Number(prompt("B: "));
let c = Number(prompt("C: "));

document.write("A= " + a + " B= " + b + " C= " + c + "<br>");
document.write("ax<sup>2</sup>+bx+c=0 <br>");
document.write(a + "x<sup>2</sup>+" + b + "x+" + c + "=0" + "<br><br>");
document.write("Diskriminans is: " + diskriminans(a, b, c) + "<br><br>");
document.write("So there is: " + quadraticEquation(a, b, c, diskriminans(a, b, c)) + "<br>");

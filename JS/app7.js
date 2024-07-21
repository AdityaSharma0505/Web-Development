// const student = {
//     name : "shradha",
//     age : 23,
//     eng : 95,
//     math : 93,
//     phy : 97,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got average marks : ${avg}`);
//     }
// };

// function getAvg() {
//     console.log(this);
// }

// Try and Catch

// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch(err) {
//     console.log("caught an error.. a is not defined");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

// Arrow functions

// const sum = (a, b) => {
//     console.log(a + b);
// };

// const cube = a => {
//     return a * a * a;
// };

// console.log(cube(5));

// const pow = (a, b) => {
//     return a ** b;
// };

// const hello = () => {
//     console.log("hello world");
// };

// If an arrow function returns only a single value, and does nothing else
// Implicit return
// We can omit the return keyword

// const mul = (a, b) => (
//     a * b
// );

// console.log(mul(2, 3));

// Set Timeout Function
// setTimeout(func, timeout);

// console.log("Hi there!");

// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);

// console.log("Welcome to ");

// Set Interval

// setInterval(func, time);

// let id = setInterval( () => {
//     console.log("Apna College");
// }, 2000);

// clearInterval(id);

// Difference between this keyword for a normal function and an arrow function - 

// In normal functions, scope of this keyword is the calling object
// But, in arrow functions, scope of this keyword has lexical scope, that is, what is the calling function of the parent object
// Example

// const student = {
//     name: "Aman",
//     marks: 95,
//     prop: this,                // In this, the value of prop will be window, because, student has global scope
//     getName: function () {
//         console.log(this);
//         return this.name;      // This will return the name with in the student object
//     },
//     getMarks: () => {
//         console.log(this);     // parent's scope which is window
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout( () => {
//             console.log(this) // Here, this is the student object
//         }, 2000);
//     },
//     getInfo2: function() {
//         setTimeout(function() {
//             console.log(this); // Here, this is the window object
//         }, 2000);
//     },
// };

// In Conclusion, for normal functions, this is the calling object of the function, and, in arrow functions, this is the calling object of the parent of the arrow function

// Practice Qs 1

// const square = (n) => (n * n);

// Practice Qs 2 

// let id = setInterval(() => {
//         console.log("Hello, World");
//     }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Clear interval ran");
// }, 10000);

// Assignment Questions

// Question 1

// const arrayAverage = (arr) => {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total / arr.length;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arrayAverage(arr));

// Question 2

// const isEven = (num) => num % 2 == 0;
// let num = 4;
// console.log(isEven(num));
// if (isEven(num) == 1) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }

// Question 3

// What is output - 

// const object = {
//     message: 'Hello, World!',

//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);

// Question 4

// What is output - 

let length = 4;
function callback() {
    console.log(this.length);
};

const object = {
    length: 5,
    method(callback) {
        callback();
    },

};

object.method(callback, 1, 2);

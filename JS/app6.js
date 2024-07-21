// function hello() {
//     console.log("hello");
// }

// hello();

// function printName() {
//     console.log("apna college");
//     console.log("aditya sharma");
// }

// printName();

// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}`);
// }

// printInfo("shradha", 23);

// Practice Qs 1

// function avg(a, b, c) {
//     console.log((a + b + c) / 3);
// }

// avg(4, 4.5, 5);

// Practice Qs 4

// function printTable(n) {
//     console.log(`The multiplication table for ${n} is coming : `);
//     for(let i = 1; i <= 10; i++) {
//         console.log(`${n} * ${i} = ${n * i}`);
//     }
// }

// printTable(2);

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(sum(1, 2), 3));

// function getSum(n) {
//     let sum = 0;
//     for(let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(getSum(7));

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result += str[i];
//     }

//     return result;
// }

// console.log(concat(str));

// let name = "shradha";

// Function expression

// let sum = function(a, b) {
//     return a + b;
// }

// sum(2, 3);

// let hello = function() {
//     console.log("Hello");
// }

// hello();

// Higher Order Functions 
// A function that does one or both : 
//   Takes one or more functions as arguments
//   Returns a function

// function multipleGreet(func, n) {
//     for(let i = 1; i <= n; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet, 10);
// multipleGreet(function() {console.log("namaste")}, 1000);

// A function which returns a function

// function OddOrEvenFactory(request) {
//     if(request == "odd") {
//         let odd = function(n) {
//             console.log(!(n%2 == 0));
//         }

//         return odd;
//     }
//     else if(request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);
//         }
//     }
//     else {
//         console.log("wrong request");
//     }
// }

// let request = "odd"; // even

//  In console, type let func = OddOrEvenFactory(request);
//  Then, the odd function gets stored in the func function
//  Then, pass func(n);

// Methods

// const calculator = {
//     add : function(a, b) {
//         return a + b;
//     },
//     sub : function(a, b) {
//         return a - b;
//     },
//     mul : function(a, b) {
//         return a * b;
//     }
// };

// Shorthand for Methods

// const calculator = {
//     add(a, b) {
//         return a + b;
//     },
//     sub(a, b) {
//         return a - b;
//     },
//     mul(a, b) {
//         return a * b;
//     }
// };

// Assignment Questions
// Question 1

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// function getElements(arr, num) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr, num);

// Question 2

// let str = "abcdabcdefgggh";

// function getUnique(str) {
//     let ans = "";

//     for(let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }

//     return ans;
// }

// console.log(getUnique(str));

// Question 3

// let countryList = ["Australia", "Germany", "United States of America"];

// function longestCountry(countryList) {
//     let maxLength = 0;
//     let longName = "";
//     for(let i = 0; i < countryList.length; i++) {
//         let currLength = countryList[i].length;
//         if(currLength > maxLength) {
//             maxLength = currLength;
//             longName = countryList[i];
//         }
//     }
    
//     return longName;
// }

// console.log(longestCountry(countryList));

// Question 4

// let str = "apna college";

// function countVowels(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels(str));

// Question 5

let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start, end));
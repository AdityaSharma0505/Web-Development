// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Print all the odd numbers from 1 to 15

// for (let i = 1; i <= 15; i = i + 2) {
//     console.log(i);
// }

// Print all the even numvers from 2 to 10

// for (let i = 2; i <= 10; i = i + 2) {
//     console.log(i);
// }

// Multiplication Table of 5

// for  (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }

// Multiplication Table of all the numbers 

// for (let i = 1; i <= 10; i++) {
//     console.log(`The Multiplicatio Table for ${i} is coming : `);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// Multiplication Table by taking input from the user 

// let n = prompt("Enter the number : ");

// console.log(`The Multiplication Table for ${n} is coming : `);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} * ${i} = ${n * i}`);
// }

// n = parseInt(n); This function converts strings or any argument passed to it to integer value

// While Loop

// let i = 1;
// while(i <= 5) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");

// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];
// for (let i = 0; i < heroes.length; i++) {
//     console.log(`List #${i}`);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }

// let student = [ ["aman", 95], ["shradha", 94.4], ["karan", 100] ];
// for (let i = 0; i < student.length; i++) {
//     console.log(`Info of student #${i + 1}`);
//     for (let j = 0; j < student[i].length; j++) {
//         console.log(console.log(student[i][j]));
//     }
// }

// let fruits = ["mango", "apple", "banana", "orange", "litchi"];

// for (fruit of fruits) {
//     console.log(fruit);
// }

// for (char of "apna college") {
//     console.log(char);
// }

// let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];

// for (list of heroes) {
//     for (name of list) {
//         console.log(name);
//     }
// }

// let todo = [];

// while (true) {

// let req = prompt("please enter your request");

//     if (req == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if (req == "list") {
//         console.log("-----------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("-----------------");
//     }
//     else if (req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if (req == "delete") {
//         let idx = prompt("please the task index that you want to delete");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     }
//     else {
//         console.log("wrong request");
//     }
// }

// Practice Qs

// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array. Example : if arr = [1,2,3,4,5,6,2,3] & num = 2 Result should be arr = [1,3,4,5,6,3]

// let arr = [1,2,3,4,5,6,2,3];
// let num = prompt("enter the number which you want to delete");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(`The new array is : ${arr}`);

// Qs2. Write a JS program to find the no of digits in a number. Example : if number = 287152, count = 6 

// let num = prompt("enter the number you want to calculate the length of");
// console.log(`The length of the number ${num} is ${num.length}`);

// Qs3. Write a JS program to find the sum of digits in a number. Example : if number = 287152, sum = 25 

// let num = prompt("Enter the number you want to calculate the sum");
// let copy = num;
// let sum = 0;
// while(copy > 0) {
//     digit = (copy % 10);
//     sum += digit;
//     copy = Math.floor(copy / 10);
// }
// console.log(`The sum of the digits of the number ${num} is ${sum}`);

// Qs4. Print the factorial of a number n. [ Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer. ] 
// Example : 7! ( factorial of 7 ) = 1x2x3x4x5x6x7 = 5040
// 5! ( factorial of 5 ) = 1x2x3x4x5=120
// 3! ( factorial of 3 ) = 1x2x3=6
// 0! Is always 1 

// let num = prompt("Enter a positive number whose factorial value you want to calculate");
// let fact = 1;

// if (num >= 0) {
//     if (num == 0) {
//         console.log("0! = 1");
//     }
//     else {
//         for (let i = 1; i <= num; i++) {
//             fact = fact *  i;
//         }
//         console.log(`${num}! = ${fact}`);
//     }
// }
// else {
//     prompt("Invalid input");
// }

// Qs5. Find the largest number in an array with only positive numbers 

// let arr = [3, 4, 4, 2, 5, 8, 5];
// let high = arr[1];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > high) {
//         high = arr[i];
//     }
// }
// console.log(`The highest number in this array is ${high}`);


// let student1 = "aman";
// let student2 = "shradha";
// let studebt3 = "rajat";

// let students = ["aman", "shradha", "rajat"];

// let marks = [99, 89, 67, 42, 100];

// let info = ["shradha", 23, 89.9];

// let fruits = ["mango", "apple", "litchi"];
// console.log(fruits);
// fruits[0] = "banana";
// console.log(fruits);
// fruits[1] = "pineapple";
// console.log(fruits);
// fruits[10] = "papaya";
// console.log(fruits);

// let cars = ["audid", "bmw", "maruti", "xuv"];
// cars.push("toyota");
// console.log(cars);
// cars.push("ferrari");
// console.log(cars);

// let primary = ["red", "yellow", "blue"];
// console.log(primary);

// console.log(primary.indexOf("yellow"));
// console.log(primary.indexOf("green"));
// console.log(primary.indexOf("Yellow"));

// console.log(primary.includes("red"));
// console.log(primary.includes("green"));

// let primary = ["red", "yellow", "blue"];
// let secondary = ["orange", "green", "violet"];

// console.log(primary.concat(secondary));
// console.log(primary.reverse());

// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// colors.splice(4);
// console.log(colors);
// console.log(colors.splice(0, 1));
// console.log(colors.splice(0, 1, "black", "grey"));
// console.log(colors)

// let chars = ['b', 'd', 'e', 'a'];
// console.log(chars.sort());

// let marks = [99, 89, 67, 42, 100];
// console.log(marks.sort());

// Practice Qs 1

//  let start = ["january", "july", "march", "august"];
//  start.splice(0, 2, "july", "june");
//  console.log(start);

// Practice Qs 2

// let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// // lang.reverse();
// // console.log(lang.indexOf("javascript"));
// console.log(lang.reverse().indexOf("javascript"));

// JavaScript Practice Qs

// Qs1. Write a JavaScript program to get the first n elements of an array. [ n can be any positive number ]. For example : for array[7,9,0,-2] and n = 3 Print, [7,9,0]

// let array = [7, 9, 0, -2];
// let n = 3;
// let ans = array.splice(0, n);
// console.log(ans);

// Qs2. Write a JavaScript program to get the last n elements of an array. [ n can be any positive number]. For example : for array[7,9,0,-2] and n = 3 Print, [9,0,-2]

// let array = [7, 9, 0, -2];
// let ans = array.slice(-3);
// console.log(ans);

// Qs3. Write a JavaScript program to check whether a string is blank or not

// let str = prompt("Enter a string : ");
// if (str.length == 0) {
//     console.log("The string is empty");
// }
// else {
//     console.log("The string is not empty");
// }

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case

// let str = "Apna College";
// let index = 3;
// if (str[index] == str[index].toLowerCase()) {
//     console.log("The character is in lowercase");
// }
// else {
//     console.log("The character is not in lowercase");
// }

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string

// let str = prompt("Please enter a string : ");
// console.log(`The original string is ${str}`);
// console.log(`The string without spaces is ${str.trim()}`);

// Qs6. Write a JavaScript program to check if an element exists in an array or not

// let arr = ["hello", "a", 23, 64, 99, -6];
// let item = 64;
// if(arr.indexOf(item) != -1) {
//     console.log("The item exists in this array");
// }
// else {
//     console.log("The element does not exists in the array");
// }


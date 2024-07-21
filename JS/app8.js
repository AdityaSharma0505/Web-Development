// forEach  function

// let arr = [1, 2, 3, 4, 5];

// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);

// OR

// arr.forEach(function(el) {
//     console.log(el);
// });

// arr.forEach((el) => {
//     console.log(el);
// });

// let arr = [
// {
//     name: "aman",
//     marks: 95,
// },
// {
//     name: "shradha",
//     marks: 94.4,
// },
// {
//     name: "rajat",
//     marks: 92,
// },
// ];

// arr.forEach((student) => {
//     console.log(student.marks);
// });

// Map function

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let double = arr.map((el) => {
//     return el * 2;
// });
// console.log(double);

// let students = [
// {
//     name: "aman",
//     marks: 95,
// },
// {
//     name: "shradha",
//     marks: 94.4,
// },
// {
//     name: "rajat",
//     marks: 92,
// },
// ];

// let GPA = students.map((student) => {
//     return student.marks / 10;
// });

// console.log(GPA);

// Filter function

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let even = nums.filter((num) => (num % 2 == 0));
// console.log(even);

// Every function 
// Returns true, if every element of the array returns true for a condition, else returns false

// [1, 2, 3, 4].every((el) => (el % 2 == 0));   // false
// [2, 4].every((el) => (el % 2 == 0));       // true

// Some function 
// Returns true, if some elements of the array returns true, else returns false

// [1, 2, 3, 4].some((el) => (el % 2 == 0)); // true
// [1, 3].every((el) => (el % 2 == 0));     // false

// Reduce function
// It reduces the array to a single value
// arr.reduce(reducer function with 2 variables for(accumulator, element));
// It can return any value like a boolean value or integer value or any value depending on the condition we gave

// let nums = [1, 2, 3, 4];
// let finalValue = nums.reduce((res, el) => (res + el));
// console.log(finalValue);

// By using reduce function, find the maximum no. of an array

// let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
// let result = nums.reduce((max, el) => {
//     if(el > max) {
//         return el;
//     }
//     else {
//         return max;
//     }
// });
// console.log(result);

// Pracatice Qs 1

// let arr = [10, 20, 30, 40];
// let ans = arr.every((el) => (el % 10 == 0));
// console.log(ans);
// if (ans == 1) {
//     console.log("All the elements of the array are multiples of 10");
// }
// else {
//     console.log("All the elements of the array are not multiples of 10");
// }

// Practice Qs 2

// let min = arr.reduce((min, el) => {
//     if(el < min) {
//         return el;
//     }
//     else {
//         return min;
//     }
// });
// console.log(min);

// OR

// let arr = [10, 20, 30, 40];

// function getMin(arr) {
//     let min = arr.reduce((min, el) => {
//         if(el < min) {
//             return el;
//         }
//         else {
//             return min;
//         }
//     });

//     return min;
// };

// console.log(getMin(arr));

// console.log(getMin([1, 2, 3, 4]));

// Default parameters

// function sum(a, b = 3) {
//     return a + b;
// }
// console.log(sum(2)); // It will print 5
// console.log(sum(1, 4)); // It will also print 5 by assigning b value 4

// let arr = [1, 2, 3, 4, 5, 6, 0, 30, 40, 38, 4, 29, 44, 3, 2];
// console.log(Math.min(...arr)); // It is called Spread
// To print an array
// console.log(arr);
// To print the array individual elements wise
// console.log(...arr);
// To copy elements of an array to another array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let newArr = [...arr];
// console.log(newArr);
// let chars = [..."hello"];
// console.log(chars);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];

// Object literals

// let data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// let dataCopy = {...data, id: 123};

// let arr = [1, 2, 3, 4, 5];
// let obj1 = {...arr}; // Here, the index of the array will be the key and the elements of the array will be the values

// Rest function
// It is just opposite to Spread function
// Allows a function to take an indefinitenumber of arguments and bundle them in an array

// function sum(...args) {
//     for(let i = 0; i < args.length; i++) {
//         console.log("you gave us : ", args[i]);
//     }
// };

// function min(a, b, c, d) {
//     console.log(arguments); // For every function, there is a collection called arguments which stores all the arguments
// };

// Destructuring of arrays

// let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];
// let [winner, runnerup, ...others] = names;

// Destructuring of objects

// let student = {
//     name: "Karan",
//     class: 10,
//     marks: 94,
//     city: "Pune",
//     username: "karan@123",
//     password: "abcd",
// }

// let {username, password} = student;
// Or
// let {username: user, password, city= "Mumbai"} = student; // In this case, the value of city will be "Pune", only if city is not available in the sudent object, then, the default value will be used

// Assignment Questions
// Practice Qs 1 - Square and sum the array elements using the arrow function and then find the average of the array

// let nums = [1, 2, 3, 4, 5, 6, 7];
// const square = nums.map((num) => (num * num));
// console.log(square);
// let sum = square.reduce((res, el) => {
//     return res + el;
// });
// console.log(sum);

// console.log(nums.length);
// console.log("The average value is : ", sum / nums.length);

// Practice Qs 2 - Create a new array using the map function whose each element is equal to the original element plus 5 

// let nums = [1, 2, 3, 4, 5, 6, 7];
// const newArr = nums.map((el) => (el + 5));
// console.log(newArr);

// Practice QS 3 - Create a new array whose elements are in upper case of words present in the original array 

// let strings = ["adam", "bob", "catlyn", "donald", "eve"];
// console.log(strings.map((string) => (string.toUpperCase())));

// Practice Qs 4 - Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array 
// values and all of the additional arguments doubled 

// const doubleAndReturnsArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((el) => (el * 2)),
// ];
// console.log(doubleAndReturnsArgs([1, 2, 3], 3, 4));
// console.log(doubleAndReturnsArgs([1], 3, 4));

// Practice Qs 5 - Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys 
// an values of the first object and second object 

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));
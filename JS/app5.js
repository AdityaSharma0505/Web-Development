// const student = {
//     name: "Aditya",
//     age: 18,
//     marks: 94.4
// };

// const item = {
//     price: 100.99,
//     discount: 50,
//     colors: ["red", "pink"]
// };

// const post = {
//     username: "@adityasharma",
//     content: "This is my #firstPost",
//     likes: 100,
//     reposts: 10,
//     tags: ["@apnacollege", "@delta"]
// };

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };

// Objects

// const student = {
//     name: "Aditya",
//     age: 18,
//     marks: 94.4,
//     city: "Dhanbad"
// };

// Nested Objects

// const classInfo = {
//     aman : {
//         grade : "A+",
//         city : "Delhi"
//     },
//     shradha : {
//         grade : "A",
//         city : "Pune"
//     },
//     karan : {
//         grade : "O",
//         city : "Mumbai"
//     }
// };

// Array of Objects

// const classInfo = [
//     {
//         name : "Aman",
//         grade : "A+",
//         city : "Delhi"
//     },
//     {
//         name : "Shradha",
//         grade : "A",
//         city : "Pune"
//     },
//     {
//         name : "Karan",
//         grade : "O",
//         city : "Mumbai"
//     }
// ];

// Guessing Game

// const max = prompt("Enter the max number : ");
// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");

// while(true) {
//     if(guess == "quit") {
//         console.log("user quit");
//         break;
//     }

//     if(guess == random) {
//         console.log("you are right! Congrats!! random number was", random);
//         break;
//     }
//     else if(guess < random) {
//         guess = prompt("hint : your guess was too small. Please try again");
//     }
//     else {
//         guess = prompt("hint : your guess was too large. Please try again");
//     }


//     // else {
//     //     guess = prompt("Your guess was wrong. Please try again.");
//     // }
// }

// Practice Qs 1

// let random = Math.floor(Math.random() * 6) + 1;
// console.log(random);

// Practice Qs 2

// const car = {
//     name : "Mercedes - benz",
//     model : "E - class",
//     color : "White"
// };

// Practice Qs 3

const person = {
    name : "John",
    age : 22,
    city : "london"
};
console.log(person);
person.city = "New York";
person.country = "United States";
console.log(person);
// let n = 5;

// for(let i = 0; i < n; i++) {
//     console.log("Hello ", i);
// }

// console.log(process.argv);

// let args = process.argv;
// for(let i = 2; i < args.length; i++) {
//     console.log("hello to ", args[i]);
// }

// const someValue = require("./math");

// console.log(someValue);

// const math = require("./math");
// console.log(math);
// console.log(math.sum(2, 2));
// console.log(math.PI);

// const info = require("./Fruits");

// console.log(info);

// console.log(info[0]);
// console.log(info[1]);
// console.log(info[2]);

// console.log(info[0].name);
// console.log(info[0].color);

// console.log(info[1].name);
// console.log(info[1].color);

// console.log(info[2].name);
// console.log(info[2].color);

// const figlet = require("figlet");

// figlet("Aditya", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

import {sum, PI} from "./math.js";
import { generate } from "random-words"

console.log(sum(1, 2));

console.log(generate());


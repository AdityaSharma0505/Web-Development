// let arr = [1, 2, 3];
// arr.sayHello = () => {console.log("Hello!, I am arr");}

// function PersonMaker(name, age) {
//     const Person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hello, my name is ${this.name}`);
//         }
//     };

//     return Person;
// }

// Constructors - doesn't return anything & start with capital letters
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hello, my name is ${this.name}`);
// };

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let p1 = new Person("name", 25);

class Student extends Person {
    constructor (name, age, marks) {
        super(name, age);
        this.marks = marks;
    }

    greet() {
        console.log("Hello!");
    }
}

let s1 = new Student("adam", 25, 95);

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

let teacher1 = new Teacher("eve", 32, "english");


// DOM Events - 
// Events are signals that something has ocurred (user inputs / actions) 

// onclick - When an element is clicked
// onmouseenter - When mouse enters an element

// let btn = document.querySelector("button");
// console.dir(btn);
// console.dir(btn.onclick);

// btn.onclick = function() {
//     console.log("button was clicked");
// }

// console.dir(btn.onclick);
// console.log(btn.onclick);

// function sayHello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("Apna College!");
// }

// btn.onclick = sayHello;
// console.dir(btn.click);
// console.dir(btn.onclick);

let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.onclick = sayHello; // This line will not be exceuted, as, onclick can have only one value
    btn.onclick = sayName; 

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function() {
        console.log("you double clicked me");
    });


    btn.onmouseenter = function() {
        console.log("you entered a button");
    }
    console.dir(btn);
}


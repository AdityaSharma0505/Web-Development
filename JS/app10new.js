// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");

//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     let color = `rgb(${red}, ${green}, ${blue})`;

//     return color;
// }

// let p = document.querySelector('p');
// p.addEventListener("click", function() {
//     console.log("parah was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     console.log("mouse inside box");
// });

// this in event listeners

// let btn = document.querySelector("button");
// let p = document.querySelector('p');
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

let btn = document.querySelector("button");
btn.addEventListener("click", function(event) {
    console.log(event);
    console.log("button was clicked");
});

let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    console.log("key = ", event.key);
    console.log("code = ", event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if(event.code == "ArrowUp") {
        console.log("character moves forward");
    }
    else if(event.code == "ArrowDown") {
        console.log("character moves backward");
    }
    else if(event.code == "ArrowLeft") {
        console.log("character moves left");
    }
    else if(event.code == "ArrowRight") {
        console.log("character moves right");
    }

    console.log("code = ", event.code); // ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
    if(event.code == "KeyU") {
        console.log("character moves forward");
    }
    else if(event.code == "KeyD") {
        console.log("character moves backward");
    }
    else if(event.code == "KeyL") {
        console.log("character moves left");
    }
    else if(event.code == "KeyR") {
        console.log("character moves right");
    }

    // console.log(event);
    // console.log("key was released");
});
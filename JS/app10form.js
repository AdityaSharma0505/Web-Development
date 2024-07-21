// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault(); // It prevents the default behaviour of the form, that is to redirect to /action
    // console.log("Form was submitted");
    // alert("Form was submitted");

    // console.dir(form);

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your passowrd is set to ${pass.value}`);
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("change event");
//     console.log("Final value: ", this.value);
// });

// user.addEventListener("input", function() {
//     console.log("input event");
//     console.log("Final value: ", this.value);
// });

// let inp = document.querySelector("#text");
// let p = document.querySelector('p');

// inp.addEventListener("input", function() {
//     p.innerText = this.value;
// });

// Assignment Questions

// Practice Qs 1 - Try out the following events in Event Listener on your own : 
// - mouseout
// - keypress
// - Scroll
// - load 

// Practice Qs 2 - Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked

// let btn = document.createElement("button");
// document.querySelector("body").append(btn);
// btn.innerText = "click me!";
// btn.addEventListener("click", function() {
//     this.style.backgroundColor = "green";
// });

// Practice Qs 3 - Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML. The purpose of this input element 
// is to enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected). Whenever the user inputs their name, their 
// input should be dynamically visible inside the heading. 
// [Please note that no other character apart from the allowed characters should be visible in the heading] 

// let h2 = document.querySelector('h2');
// let inp = document.querySelector("#inp");

// inp.addEventListener("input", function() {
//     h2.innerText = this.value;
// });

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis) {
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}


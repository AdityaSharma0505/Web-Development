// document.getElementById("id");  // This is a method which returns the HTML element as an object if found, or null, if not found
// document.getElemenstByClassName("ClassName"); // This is a method which returns an HTML collection, if the element is found, or a null collection, if not found
// These collections can be accessed in the same way by index numbers as arrays, but they are not exactly arrays, as some of the array methods like push, pop, etc. can't be used with them

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i = 0; i < smallImages.length; i++) {
//     console.dir(smallImages[i]);
//     console.dir(smallImages[i].src);
// }

// document.getElementsByTagName("p"); // It returns the elements as an HTML collection or empty collection, if not found

// Query Selectors
// Allows us to use any CSS selector

// document.querySelector('p'); // Selects first p element
// document.querySelector('#myId'); // Selects first element with id = myId
// document.querySelector('.myClass'); // Selects first element with class  = myClass
// document.querySelectorAll("p"); // Selects all p elements 

// console.dir(document.querySelector("div a")); // It will select the first anchor tag within the div
// console.dir(document.querySelectorAll("div a")); // It will select all the anchor tags within the div 

// Using Properties and Methods

// innerText - Shows the visible text contained in a node
// textContent - Shows the full text
// innerHTML - Shows the full markup

// let heading = document.querySelector('h1');
// heading.innerHTML = `<u>${heading.innerText}</u>`;; // This will underline the heading

// Manipulating Attributes

// let img = document.querySelector('img');
// img.getAttribute('id');
// img.setAttribute('id', 'spidermanImg'); // The styling of this image will change as the CSS properties were defined for the img element with the previous id 
// img.setAttribute('src', "assets/creation_3.jpeg");
// img.getAttribute('class'); // It will print null
// img.setAttribute('class', 'images'); // It will set the class for the image to 'images' 

// Manipulating Styles
// For this, we use obj.style method
// But, .style method can only be used for inline styles, that is, the properties defined in the CSS file cannot be changed from it

// let links = document.querySelectorAll('.box a');
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "yellow";
// }
// //Or
// for(link of links) {
//     link.style.color = "purple";
// }

// Obj.classList is used to see all the classes of an object

// let img = document.querySelector('img');
// console.dir(img.classList); // It will show a list of all the classes of the img object

// let heading = document.querySelector('h1');
// console.dir(heading.classList);

// classList.add()  // It is used to add new classes
// classList.remove() // It is used to remove classes
// classList.contains() // To check if class exists
// classList.toggle() // To toggle between add and remove, it adds the class if it is not there or removes the class if it is already there

// We can write in console, heading.classList.add("green"); to add the "green" class to heading

// Navigation on page - 

// parentElement
// children
// childElementCount // It tells the number of children an element has
// previousElementSibling / nextElementSibling

// let h4 = document.querySelector('h4');
// console.dir(h4.parentElement);

// let box = document.querySelector(".box");
// console.dir(box.children);
// console.dir(box.childElementCount);

// let img = document.querySelector('img');
// img.previousElementSibling.style.color = "green";

// Adding elements on page - 

// document.createElement('p');
// appendChild(element);
// append(element);
// prepend(element);
// insertAdjacentElement(where, element);

// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "Hi, I am a new p";
// console.dir(newP);

// let body = document.querySelector('body');
// body.appendChild(newP);

// let box = document.querySelector('.box');
// box.appendChild(newP);

// newP.append(" this is a new text");

// box.prepend(newP);

// insertAdjacentElement(where, element);
// It can have four values for position - 
// beforebegin, afterbegin, beforeend, afterend 

// let btn = document.createElement('button');
// btn.innerText = "NEW BUTTON!!!";
// let p = document.querySelector('p');
// p.insertAdjacentElement('beforebegin', btn);
// p.insertAdjacentElement('afterbegin', btn);
// p.insertAdjacentElement('beforeend', btn);
// p.insertAdjacentElement('afterend', btn);

// Removing elements - 

// removeChild(element); // Works like appendChild 
// remove(element); // Works like append 

// let btn = document.createElement('button');
// btn.innerText = "NEW BUTTON!!!";
// let p = document.querySelector('p');
// p.insertAdjacentElement('afterend', btn);
// let body = document.querySelector('body');

// body.removeChild(btn);

// p.insertAdjacentElement('afterend', btn);
// btn.remove();

// Add the following elements

// Practice Qs 1 

// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector('body').append(para1);
// para1.classList.add("red");

// Practice Qs 2 

// let h3 = document.createElement('h3');
// h3.innerText = "I'm a blue h3";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");

// Practice Qs 3 

// let div = document.createElement('div');
// document.querySelector('body').append(div);
// div.classList.add("border");
// div.classList.add("pink");
// let h1 = document.createElement('h1');
// h1.innerText = "I'm in a div";
// div.insertAdjacentElement('afterbegin', h1);
// let p = document.createElement('p');
// p.innerText = "ME TOO!";
// div.insertAdjacentElement('beforeend', p);

// Assignment Questions

// Practice Qs 1 - Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me” 

let input = document.createElement('input');
input.setAttribute('type', "text");
document.querySelector('body').append(input);
let btn = document.createElement('button');
btn.innerText = "Click me";
document.querySelector('body').append(btn);

// Practice Qs 2 - Add following attributes to the element :
// - Change placeholder value of input to “username” 
// - Change the id of button to “btn” 

input.placeholder = "username";
btn.setAttribute('id', 'btn');

// Practice Qs 3 - Access the btn using the query Selector and button id. Change the button background color to blue and text color to white 

let button = document.querySelector("#btn");
button.classList.add("btnStyle");

// Practice Qs 4 - Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple 

let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add("purple");
document.querySelector('body').append(h1);

// Practice Qs 5 - Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold 

let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(p);
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.insertAdjacentElement("beforeend", li);
    let del = document.createElement('button');
    del.innerText = "Delete";
    del.classList.add("delete");
    li.insertAdjacentElement('beforeend', del);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    // console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//        let parElement = this.parentElement;
//         parElement.remove();
//     });
// }
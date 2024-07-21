// Axios - Library to make http requests

// let btn = document.querySelector("button");
// let p = document.querySelector("#result");
// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//     let res = await axios.get(url);
//     return res.data.fact;
//     } catch (err) {
//         console.log("error : ", err);
//         return "No fact found";
//     }
// }

// Sending Headers with API requests

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers : { Accept: "application/json"} };
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// Updating query strings

let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colArr  = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";

    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch (err) {
        console.log("error : ", err);
        return [];
    }
}
// let jsonRes = '{"fact":"When a domestic cat goes after mice, about 1 pounce in 3 results in a catch.","length":76}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);

// let student = {
//     name: "shradha",
//     marks: 95,
// };

// JSON.stringify(student);  // In console 


// API request

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     // console.log(res);
//     // console.log(res.json());
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 = ", data2.fact);
// })
// .catch((err) => {
//     console.log("Error - ", err);
// });

// Using async and await

async function getFacts() {
    try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
    } catch (err) {
        console.log("error : ", err);
    }
}
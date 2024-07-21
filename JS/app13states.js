let url = "http://universities.hipolabs.com/search?country=india&state-province=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    let colArr = await getColleges(state);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";

    for(col of colArr) {
        console.log(col.name);
    }
}

async function getColleges(state) {
    try {
        let res = await axios.get(url+state);
        return res.data;
    } catch (err) {
        console.log("error : ", err);
        return [];
    }
}

// async function getColleges() {

// let res = await axios.get("http://universities.hipolabs.com/search?country=india&state-province=delhi");
// console.log(res.data);
// }
console.log("app4_list_lesson_14.js is ready!")

const jsonUrl = "/app4_list_lesson_14/app4_list_lesson_14.json";
let data = "";

function getJson() {
    console.log("getJson data")

    fetch(jsonUrl)
    .then(resp => resp.text())
    .then(jsonData => {
        data = JSON.parse(jsonData)
        console.log(jsonData)
        console.log(data)
    })

    console.log("my new data", data)
}

getJson();
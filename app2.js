console.log("I'm ready! url = ")
const url = 'j1.json';
let data = '';

function myJson(){
    fetch(url)
    .then(rep => rep.json())
    .then(json => {
        data = json;
        console.log("data", data)
    })
}

myJson();
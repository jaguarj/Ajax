const url = 'j1.json';
let data = '';

const localData = localStorage.getItem('temp1');

if (!localData) {
    console.log("!localData")
    myJson();
    // console.log("Saved to local storage")
} else {
    data = JSON.parse(localData)
    // console.log(data)
}

function myJson(){
    fetch(url)
    .then(res => res.text())
    .then(json => {
        data = JSON.parse(json);
        console.log("data", data)
        // NOTE: LocalStorage will hold string data.
        let str = JSON.stringify(data);
        localStorage.setItem('temp1', str);
        // console.log("1. localData",localData);
    })
}

myJson();

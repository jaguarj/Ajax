console.log('dom.js is ready!')

const h1Tag = document.querySelector('h1');
console.log(h1Tag);

const divTags = document.querySelectorAll('div');
console.log(divTags);

// divTags.forEach((ele, index, arr) => {
//     console.log(ele.textContent = "I pooped "+ index +" times today.", arr)
// });

// divTags.forEach(ele => console.log(ele))

// ===================================================

const bodyTag = document.querySelector('body');
const hTag = document.querySelector('h1');
const inputTag = document.querySelector('input');
const spanTag = document.querySelector('span');
const btn = document.createElement('button');
let counter = 0;

btn.textContent = "Click Me!"
btn.addEventListener('click', (e) => {
    const divTag = document.createElement('div');
    document.body.append(divTag)
    counter++;
    divTag.textContent = `${inputTag.value} ${counter}`;
    divTag.addEventListener('click', myClick);
    
})

hTag.addEventListener('click', (e) => {
    if (hTag.textContent == "JavaScript") {
        hTag.textContent = "Jey Hosh!"
    } else {
        hTag.textContent = "Jazz"
    }
})

// Added the button to the span element.
spanTag.append(btn)

// Added event listner to the input tag element.
inputTag.addEventListener('click', (e) => {
    // console.log(inputTag.getAttribute('type'))
    if(inputTag.getAttribute('type') == "text") {
        inputTag.setAttribute('type', 'number') 
    } else {
        inputTag.setAttribute('type', 'text') 
    }
})

// Added dummy inner html to divs.
divTags.forEach((div, ind) => {
    div.innerHTML = `<h2>Hey everyone! ${ind + 1}</h2>`;
})

// Added myClick function to toggle the div class of box.
function myClick(e){
    e.target.classList.toggle('box')
}


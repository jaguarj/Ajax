window.addEventListener('DOMContentLoaded', (event) => {
    // DOMContentLoaded - Ensures that the DOM has been loaded entirely
    // without waiting for images, stylesheets.
    // TODO: Create a function to check the state of the DOM.
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
    console.log("app4_list_lesson_14.js is ready!")
    
    const jsonUrl = "/app4_list_lesson_14/app4_list_lesson_14.json";
    const output = document.querySelector(".output");
    output.textContent = "Loading...";

    function getJson() {
        fetch(jsonUrl)
        .then(resp => resp.json())
        .then(jsonData => {
            console.log(jsonData)
            output.innerHTML = "";
            jsonData.forEach(elm => {
                makeList(elm);
            })
        })
    }

    getJson();

    function makeList(item){
        const div = document.createElement("div");
        div.innerHTML = `User: ${item.first_name} ${item.last_name}`;
        output.append(div);
    }





});



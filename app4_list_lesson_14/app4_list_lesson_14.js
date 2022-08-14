window.addEventListener('DOMContentLoaded', (event) => {
    console.log(event)
    // DOMContentLoaded - Ensures that the DOM has been loaded entirely
    // without waiting for images, stylesheets.
    // TODO: Create a function to check the state of the DOM.
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
    console.log("app4_list_lesson_14.js is ready!")
    const output = document.querySelector(".output");
    console.log(output)

    const jsonUrl = "/app4_list_lesson_14/app4_list_lesson_14.json";

    let data = "";

    function getJson() {
        fetch(jsonUrl)
        .then(resp => resp.text())
        .then(jsonData => {
            data = JSON.parse(jsonData)
            console.log(data)
        })
    }

    getJson();
});



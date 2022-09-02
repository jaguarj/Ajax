window.addEventListener('DOMContentLoaded', (event) => {
    // DOMContentLoaded - Ensures that the DOM has been loaded entirely
    // without waiting for images, stylesheets.
    // TODO: Create a function to check the state of the DOM.
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

    const jsonUrl = "/app4_list_lesson_14/app4_list_lesson_14.json";
    const output = document.querySelector(".output");
    output.textContent = "Loading...";

    // Reload JSON Data Button
    const reloadBtn = document.createElement("button");
    reloadBtn.setAttribute("type", "button")
    reloadBtn.textContent = "Reload JSON Data";
    reloadBtn.addEventListener("click",reloadJSONData);

    const input1 = document.createElement("input");
    input1.setAttribute("placeholder", "Name");

    const input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.value = "20";

    const addBtn = document.createElement("button");
    addBtn.classList = "add-btn";
    addBtn.textContent = "Add to List";
    addBtn.addEventListener("click", addToList);
    const addContainer = document.createElement("div");
    addContainer.classList = "add-container";
    addContainer.append(input1, input2, addBtn);

    document.body.prepend(addContainer);
    document.body.prepend(reloadBtn);


    // Making myList lesson 15.
    let myList = [];
    let localData = localStorage.getItem("myList");

    if(localData) {
        myList = JSON.parse(localStorage.getItem("myList"));
        maker();
    } else {
        fetch(jsonUrl)
        .then(resp => resp.json())
        .then(jsonData => {
            myList = jsonData;
            maker();
            saveToStorage();
        });
    }
    // Make list maker
    function maker(){
        output.innerHTML = "";
        myList.forEach((elm,index) => {
            makeList(elm, index);
        });
    };
    // Make list DOM
    function makeList(item, index){
        const div = document.createElement("div");
        div.id = `${item.id}_user`;
        div.classList = "user-info";

        if (item.status === true) {
            div.classList.add("active");
        } else {
            div.classList.add("inactive")
        }

        div.addEventListener("click",(e) => {
            div.classList.toggle("active");
            div.classList.toggle("inactive");

            if(div.classList.contains("active")){
                myList[index].status = true;
            } else {
                myList[index].status = false;
            }

            saveToStorage();
        });

        // Username format
        div.innerHTML = `<span>${formatUsername(item.first_name, item.last_name)}</span>`;
        // Friends list/count
        const divFriends = document.createElement("div");
        divFriends.id = `${item.id}_user_friends_list`;
        divFriends.classList = "friends-list";
        divFriends.innerHTML = `<span>Friends: </span> <span class="friends-count">${item.friends}</span>`;
        // Social Media formatting
        const divSocialMedia = document.createElement("div");
        divSocialMedia.id = `${item.id}_user_social_media_list`;
        divSocialMedia.classList = "social-media-list";
        divSocialMedia.innerHTML = `<span>Social Media: </span> <ol class="social-media">${formatUserSocialMedia(item.social_media)}</ol>`;
        // Appended elements
        output.append(div);
        div.append(divFriends);
        div.append(divSocialMedia);

        // Remove item from list
        const removeBtnContainer = document.createElement("div");
        removeBtnContainer.classList = "remove-btn-container";
        div.append(removeBtnContainer);

        const removeBtn = document.createElement("span");
        removeBtn.classList = "remove-btn";
        removeBtn.textContent = "Delete";
        removeBtnContainer.append(removeBtn);
        removeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log(index)

            div.remove();
            myList.splice(index, 1)
            saveToStorage();
        })
    };

    // Helper Functions ==================================

    function formatUsername(firstName, lastName) {
        // Added helper function to propperly handle a user's name
        // with correct capitalization. 
        // TODO: To take it further, check for spaces inbetween names,
        // then, extract the middle names or spaced names, to make those
        // capitalized as well. 

        const formattedUsername = 
        firstName.charAt(0).toUpperCase()
        + firstName.slice(1,firstName.length) 
        + " " 
        + lastName.charAt(0).toUpperCase() 
        + lastName.slice(1,lastName.length);
        // console.log(fN, lN)
        return `User: ${formattedUsername}`
    };

    function formatUserSocialMedia(social) {
        let html = 
            social.map(function(link) {
                return `<li><a href="${link.handle}">${link.type}</a></li>`;
            }).join("");

        return html
    };

    function addToList(){
        console.log(input1.value, input2.value)

        let obj = {
            "id": 123,
            "first_name": input1.value,
            "last_name": "seipel",
            "age": input2.value,
            "friends": 5,
            "status": false,
            "social_media": [
                {
                    "type": "facebook",
                    "handle": "https://facebook.com/josh"
                },
                {
                    "type": "twitter",
                    "handle": "https://twitter.com/josh"
                },
                {
                    "type": "github",
                    "handle": "https://github.com/jaguarj"
                }
            ]
        };

        const listLengthVal = myList.length
        myList.push(obj);
        saveToStorage()
        makeList(obj, listLengthVal);
        obj = {};

    };

    function saveToStorage(){
        console.log("saveToStorage()",myList)
        localStorage.setItem("myList", JSON.stringify(myList));
    };

    function reloadJSONData(){
        fetch(jsonUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json();
        })
        .then((response) => {
            myList = response;
            maker();
            saveToStorage();
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation: ', error);
        })
    };

    // ====================================================
});



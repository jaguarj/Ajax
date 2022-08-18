window.addEventListener('DOMContentLoaded', (event) => {
    // DOMContentLoaded - Ensures that the DOM has been loaded entirely
    // without waiting for images, stylesheets.
    // TODO: Create a function to check the state of the DOM.
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
    console.log("app4_list_lesson_14.js is ready!")
    
    const jsonUrl = "/app4_list_lesson_14/app4_list_lesson_14.json";
    const output = document.querySelector(".output");
    output.textContent = "Loading...";
    
    // Making myList lesson 15.
    let myList = [];
    console.log(myList)
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
            localStorage.setItem("myList", JSON.stringify(myList));
        });
    }

    function maker(){
        output.innerHTML = "";
        myList.forEach((elm,index) => {
            makeList(elm, index);
        });
    };

    function makeList(item, index){
        const div = document.createElement("div");
        div.id = `${item.id}_user`;
        div.classList = "userInfo";

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

            localStorage.setItem("myList", JSON.stringify(myList));

            console.log(myList)
        });

        // Username format
        div.innerHTML = `<span>${formatUsername(item.first_name, item.last_name)}</span>`;
        // Friends list/count
        const divFriends = document.createElement("div");
        divFriends.id = `${item.id}_user_friends_list`;
        divFriends.classList = "friendsList";
        divFriends.innerHTML = `<span>Friends: </span> <span class="friendsCount">${item.friends}</span>`;
        // Social Media formatting
        const divSocialMedia = document.createElement("div");
        divSocialMedia.id = `${item.id}_user_social_media_list`;
        divSocialMedia.classList = "socialMediaList";
        divSocialMedia.innerHTML = `<span>Social Media: </span> <ul class="socialMedia">${formatUserSocialMedia(item.social_media)}</ul>`;
        // Appended elements
        output.append(div);
        div.append(divFriends);
        div.append(divSocialMedia);

        const removeBtn = document.createElement("span");
        removeBtn.classList = "remove-btn";
        removeBtn.textContent = "Delete";
        div.append(removeBtn);
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

    // ====================================================
});



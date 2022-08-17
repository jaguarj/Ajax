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
        div.id = `${item.id}_user`;
        div.classList = "userInfo";

        if (item.status === true) {
            div.classList.add("active");
        }
       
        div.innerHTML = `<span>${formatUsername(item.first_name, item.last_name)}</span>`;

        const divFriends = document.createElement("div");
        divFriends.id = `${item.id}_user_friends_list`;
        divFriends.classList = "friendsList";
        divFriends.innerHTML = `<span>Friends: </span> <span class="friendsCount">${item.friends}</span>`;

       const formatUserSocialMedia = (social) => {
            let html = 
            '<ul>' +
                social.map(function (link) {
                    console.log('link', link)
                    return `<li>${link.type}: <a href=#>${link.handle}</a></li>`;
                }).join('') +
            '</ul>';

            return html
        }

        const divSocialMedia = document.createElement("div");
        divSocialMedia.id = `${item.id}_user_social_media_list`;
        divSocialMedia.classList = "socialMediaList";
        divSocialMedia.innerHTML = `<span>Social Media: </span> <div class="socialMedia">${formatUserSocialMedia(item.social_media)}</div>`;

        output.append(div);
        div.append(divFriends);
        div.append(divSocialMedia);



        // const userDiv = document.querySelectorAll(".userInfo")
        // userDiv.appendChild(friendsContainer);


        
    }

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
    }

    // ====================================================



});



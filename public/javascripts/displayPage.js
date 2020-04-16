const url = 'http://localhost:3000/api/posts';
fetch(url)
.then((response) => response.json())
.then(function(data) {
    console.log(data);
    let username = document.getElementById("username");
    username.innerHTML = document.cookie.slice(9);
    let story = document.getElementById("story");
    story.innerHTML = data[0].story;
    for(let i=1;i<data.length;i++){
        createPostArea(data[i].story);
    }
}) 

function postStory(){
    const url = 'http://localhost:3000/api/posts/new';
    let storyElement = document.getElementById('storyPost');
    let story = storyElement.value;
    const userData = {
        "story" : story
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((userData) => {
        console.log(userData);
        createPostArea(story);
        })
        .catch((error) => {
        console.error('Error:', error);
            alert("Your Session Expired");
            document.location.href="/login";
        });
        storyElement.value="";
}

function createPostArea(data){
    let newStorySpace = document.createElement('LI');
    let userNameSpace = document.createElement('h3');
    userNameSpace.setAttribute("id","userName");
    userNameSpace.innerHTML = document.cookie.slice(9);
    let hr = document.createElement('hr');
    let br = document.createElement('hr');
    let userStorySpace = document.createElement('h5');
    userStorySpace.innerHTML = data;
    let storyList = document.getElementById('storySpace');
    storyList.insertBefore(newStorySpace,storyList.childNodes[0]);
    newStorySpace.appendChild(userNameSpace);
    // newStorySpace.appendChild(hr);
    newStorySpace.appendChild(userStorySpace);
    newStorySpace.appendChild(br);
}
function home(){
    document.location.href="/";
}
function logout(){
    const url = "http://localhost:3000/api/clear";
    fetch(url, {
        method: 'POST'})
        .then((response) => response.json())
        .then((serverResponse) => {
        console.log(serverResponse);
        document.location.href="/";
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}
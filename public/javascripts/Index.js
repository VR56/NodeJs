let divButton = document.getElementById('buttonDisplay');
if(document.cookie){
    let profileButton = document.createElement('button');
    profileButton.setAttribute("class","btn btn-light");
    profileButton.innerHTML = "Profile";
    profileButton.setAttribute("onclick","redirect()");
    divButton.appendChild(profileButton);
}
else{
    let loginButton = document.createElement('button');
    loginButton.setAttribute("class","btn btn-success");
    loginButton.innerHTML = "Login";
    loginButton.setAttribute("onclick","redirect()");
    divButton.appendChild(loginButton);
}
function redirect(){
    document.location.href="login";
}
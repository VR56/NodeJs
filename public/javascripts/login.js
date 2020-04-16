const url = 'http://localhost:3000/api/auth';
function authorize(){
    let user = document.getElementById('username');
    let pass = document.getElementById('pass');
    let userData = {
        username : user.value,
        password : pass.value
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((serverResponse) => {
        if(serverResponse.result===true){
            document.location.href=document.cookie.slice(9);
        }
        })
        .catch((error) => {
        console.error('Error:', error);
        errorMessageCreation();
        });
}

function errorMessageCreation(){
    let formContainer = document.getElementById("errorDiv");
    formContainer.innerHTML="";
    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("class","alert alert-danger");
    errorMessage.setAttribute("role","alert");
    errorMessage.innerHTML="Wrong Credentials!";
    formContainer.appendChild(errorMessage);
}

function create(){
    console.log("yes");
    document.location.href="create";
}
 
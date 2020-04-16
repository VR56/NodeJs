function submit(){
    
    let firstName = document.getElementById('fistname');
    let lastName = document.getElementById('lastname');
    let userName = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('pass');

    const userData = {
        firstName : firstName.value,
        lastName : lastName.value,
        userName : userName.value,
        password : password.value,
        email : email.value,

    };
    const url = 'http://localhost:3000/api/create';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((serverResponse) => {
        console.log('Success:', serverResponse);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}
function back(){
    document.location.href='login'
}
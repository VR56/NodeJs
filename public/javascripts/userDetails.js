const url = 'http://localhost:3000/api/userprofile';
fetch(url)
.then((response) => response.json())
.then(function(data) {
    console.log(data);
    let name = document.getElementById("Name");
    name.innerHTML = data.name.firstName+" "+data.name.lastName;
    let Address = document.getElementById("Address");
    Address.innerHTML = data.address.houseNo+","+data.address.buildingName+","+data.address.Area+","+data.address.city+","+data.address.state;
    let Email = document.getElementById("Email");
    Email.innerHTML = data.email;
}) 
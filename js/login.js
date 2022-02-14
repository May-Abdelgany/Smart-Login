
var allUsers;
if (localStorage.getItem("users") == null) {
    allUsers = [];
}
else {
    allUsers = JSON.parse(localStorage.getItem("users"));
}

let btn = document.querySelector('button');

btn.addEventListener("click", login);
function login() {
    var email = document.getElementById("emailId").value;
    var pass = document.getElementById("passId").value;
    if (email == "" || pass == "") {
        document.getElementById("alert").innerHTML = "All inputs is required";
    }
    else if (email != "" && pass != "") {
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == email && allUsers[i].pass == pass) {
                localStorage.setItem('userName', allUsers[i].name)
                clear();
                window.location = "home.html";
            }
        }

    }
    else {
        document.getElementById("alert").innerHTML = "All inputs is required";
    }
}
function display(index){
console.log(index);
}
function clear() {
    document.getElementById("emailId").value = "";
    document.getElementById("passId").value = "";
}


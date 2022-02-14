var allUsers;
if (localStorage.getItem("users") == null) {
    allUsers = [];
}
else {
    allUsers = JSON.parse(localStorage.getItem("users"));
}

//sign up
let btn = document.querySelector('button');
let pattern = ` /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;
btn.addEventListener("click", signup);

function signup() {
    var user = {
        name: document.getElementById("nameId").value,
        email: document.getElementById("emailId").value,
        pass: document.getElementById("passId").value,
    }
    if (user.name == "" || user.email == "" || user.pass == "") {
        document.getElementById("alert").innerHTML = "All inputs is required";
    }
    else {
        clear();
        allUsers.push(user);
        localStorage.setItem("users", JSON.stringify(allUsers));
        document.getElementById("alert").classList.replace("text-danger", "text-success")
        document.getElementById("alert").innerHTML = "success";
    }
}

function clear() {
    document.getElementById("nameId").value = "";
    document.getElementById("emailId").value = "";
    document.getElementById("passId").value = "";
}
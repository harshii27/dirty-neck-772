let userData = JSON.parse(localStorage.getItem("userData"));

let mail = document.getElementById("email");
let pass = document.getElementById("psw");

document.getElementById("login").addEventListener("click", () => {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email == mail.value) {
            if (userData[i].psw == pass.value) {
                alert("login successfull");
                location.href = "index.html";
            } else {
                alert(" password incorect")
            }
        }
        else {
            alert("user is not register");
        }
    }
})
let userData = JSON.parse(localStorage.getItem("userData"))||[];

let email = document.getElementById("email");
let psw = document.getElementById("psw");
let cpsw = document.getElementById("cpsw");

document.getElementById("registerBTN").addEventListener("click", (e) => {
    e.preventDefault();
    if(psw.value==cpsw.value){
        let obj = {
            email:email.value,
            psw:psw.value,
        }
        userData.push(obj);
        localStorage.setItem("userData",JSON.stringify(userData));
        alert("registration successfull");
        location.href = "login.html";
    }
    else{
        alert("password are not match");
    }

})
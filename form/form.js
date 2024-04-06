
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("Email");
const number = document.getElementById("number");
const Password = document.getElementById("Password");
const cpassword = document.getElementById("cpassword");
const btn = document.getElementById("btn");


const isEmail = (emailval) => {

    console.log(emailval)
    const atsymbol =emailval.indexOf("@");
    const dot = emailval.lastIndexOf(".");
    if (atsymbol < 2) return false;
    if (dot < atsymbol + 2) return false;
    if (dot > emailval.length - 2) return false;
    return true;
}

const isnumber=(numberval)=>{
    if(numberval.length != 10) return false;
    if(numberval=='!' || numberval== '@'|| numberval== '#'|| numberval== '&'|| numberval== '*'|| numberval== '+') return false;
    return true;
}

const setSuccessMgs =(hello)=>{
    alert("successfully submitted");
    swal("welcome!","successfully Registered","success");
    location.href=`C:\Users\bipes\Desktop\project01\weather.html?username=${usernameval}`
}


function validation() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const numberval = number.value.trim();
    const Passwordval = Password.value.trim();
    const cpasswordval = cpassword.value.trim();
    
    if (usernameval === "") {
        setErrMsg(username, "username can't be blank");
    } else if (usernameval.length <= 3) {
        setErrMsg(username, "username can't be less then 3 char");
    } else {
        setSuccessMgs(username);
    }


    if (emailval === "") {
        setErrMsg(email, "email can't be blank ");
    } else if (!isEmail(emailval)) {
        setErrMsg(email, "email invalid");
    } else {
        setSuccessMgs(email);
    }


    if (numberval === "") {
        setErrMsg(number, "number can't be blank ");
    } else if (!isnumber(numberval)) {
        setErrMsg(number, "number is invalid");
    } else {
        setSuccessMgs(number);
    }


    if (Passwordval=== "") {
        setErrMsg(Password, "password can't be blank ");
    } else if (Passwordval.length <= 10) {
        setErrMsg(Password, "password is not strong");
    } else {
        setSuccessMgs(Password);
    }



    if (cpasswordval === "") {
        setErrMsg(cpassword, "can't be blank ");
    } else if (cpasswordval !== Passwordval) {
        
        setErrMsg(cpassword, "password doesn't match");
    } else {
        setSuccessMgs(cpassword);
    }
    
    setSuccessMgs(usernameval);
}

// throwing error mssg if the data is not valid:
function setErrMsg(input, errrormsg) {
    const check = input.parentElement;
    console.log(check);
    let small =check.querySelector('small');
    small.style.visibility='visible';
    small.innerText = errrormsg;


}


btn.addEventListener('click', (event) => {
    event.preventDefault();
    validation();
    
});

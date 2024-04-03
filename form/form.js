const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("Email");
const number = document.getElementById("number");
const Password = document.getElementById("Password");
const cpassword = document.getElementById("cpassword");
const btn = document.getElementById("btn");


btn.addEventListener('submit', (event) => {
    event.preventDefault();


    validation();
});



const isEmail=(emailval)=>
{

    const emailsymbol = emailval.indexof('@');
    const dot = emailval.lastindexof(".");
    if(emailsymbol < 2) return false;
    if(dot < emailsymbol + 2 ) return false;
    if(dot > emailval.length - 2) return false;
    return true;
}



function validation() {
    const usernameval = username.value.tirm();
    const emailval = email.value.tirm();
    const numberval = number.value.tirm();
    const Passwordval = Password.value.tirm();
    const cpasswordval = cpassword.value.tirm();
    
    if(usernameval===" ")
    {
        setErrMsg(usernameval,"username can't be blank");
    }else if(usernameval.length <= 3)
    {
        setErrMsg(usernameval,"username can't be less then 3 char");
    }else
    {
        setSuccessMgs(usernameval);
    }


    if(emailval===" ")
    {
      setErrMsg(emailval,"email can't be blank ");
    }else if(!isEmail(emailval))
    {
        setErrMsg(emailval,"email invalid");
    }else
    {
        setSuccessMgs(emailval);
    }

}

// throwing error mssg if the data is not valid:
function setErrMsg(input,errrormsg)
{
    const check = input.parentElement;
    
}



function validateName(form){
    var regex = /^[a-zA-Z ]+$/;
    if(regex.test(form.name.value) == false)
    {
    alert("Name must be in alphabets only");
    return false;
    }

    return form.name.value
  }
  
  function validateContact(form){
    
    return form.contact.value;

}

function validateMail(form)
{

    return form.email.value;

}

function validatePassword(form){
pwd = form.pwd.value;
var passw=   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if(pwd.match(passw)) {

    return pwd;
}
else{
alert("Try another password")
return false
}
}

function validateGender(form){
var genders= form.gender.value;


if(genders.toUpperCase()=="FEMALE" ){

    return "Female"
}else if(genders.toUpperCase()=="MALE"){
    return "Male"
}
else{
    alert("Gender must be Male or Female")
    return false;
}
}
  
  function validateAddress(form){
    var address = /^[a-zA-Z0-9,./ ]{7,250}/;
    if(address.test(form.address.value)){
        return form.address.value;
    }
    else{
        alert("This is not a valid address");
        return false;
    }
    return true
}



function validateAgree(form)
{
    if(form.agree.checked)
    {
        return true
    }
    document.getElementById("agreed").innerHTML = "Please Agree!"
}


function postRequest(checkName ,  checkMail , checkPassword , checkGender,checkContact ){
    axios.post("http://localhost:1337/Registrations", {
        "name": checkName,
        "contact" : checkContact,
        "gender" : checkGender,
        "email" :checkMail,
        "password": checkPassword
    }).then(function(response){
        console.log(response.data);
        window.location.href="http://127.0.0.1:5500/login.html"
    })
}

function loginUser(checkMail,checkPassword)
{
    axios.post("http://localhost:1337/Logins",{
        "email": checkMail,
        "password": checkPassword
    }).then(function(response)
    {
        console.log(response.data);
    })
}


function validateForm()
{
    form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
    });
    var checkName = validateName(form);
    var checkMail=validateMail(form)
    var checkPassword = validatePassword(form)
    var checkGender = validateGender(form)
    var checkContact= form.contact.value
    if(checkName  && checkMail && checkPassword && checkGender && checkContact){
       
        postRequest(checkName ,  checkMail , checkPassword , checkGender, checkContact)
        
        loginUser(checkMail, checkPassword) 
    }

}
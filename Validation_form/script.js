
const form_id = document.getElementById("form_id")
const username = document.getElementById("Username")
const email = document.getElementById("Email")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("passwordConfirm")

//show input error message

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form_control error";
    const small_tag = formControl.querySelector("small");
    small_tag.innerText = message;
}

//show success

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form_control success";
}

//validating email

function checkEmail(input){
    //validation using regex
    const EmailAddress = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if(EmailAddress.test(input.value.trim())){
        showSuccess(input);
        EmailAddress.test(String(email).toLowerCase());
    }else{
        showError(input, "Email is not valid");
    }
}

//to check the required fields

function checkRequiredField(inputArray){
    inputArray.forEach(input => {
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

//check input length 
function checkNameLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be alteast ${min} characters long`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters long`);
    }else{
        showSuccess()
    }
}


//check password matches

function checkPasswdMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "please, provided password mismatch");
    }
}

//get the field name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//event listeners
form_id.addEventListener("submit", (e)=>{
    e.preventDefault();

   checkRequiredField([username, email, password, passwordConfirm]);
   checkNameLength(username, 3, 20);
   checkPasswordLength(username, 8, 40);
   checkEmail(email);
   checkPasswdMatch(password, passwordConfirm);
});









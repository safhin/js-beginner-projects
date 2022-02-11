const userName = document.querySelector("#username");
const userEmail = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const passwordElCon = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");

//Check isrequired field 
const isRequired = value => value === '' ? false : true;

//Check length of given input
const isBetween = (length, min, max) => length < min || length > max ?false: true;

//Check email is valid
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
}

//Check secure password
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}

//Show error
const showError = (input, message) => {
    //get the form-field element
    const formField = input.parentElement;
    //add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    //show the error message 
    const error = formField.querySelector('small');
    error.textContent = message;
}

//Show success
const showSuccess = (input) => {
    //get the form-field element
    const formField = input.parentElement;
    //add the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    //show the error message 
    const error = formField.querySelector('small');
    error.textContent = '';
}

// Check username
const checkUsername = () => {

    let valid = false;
    const min = 3, max = 25;
    const username = userName.value.trim();

    if(!isRequired(username)){
        showError(userName, 'Username cannot be blank');
    }else if(!isBetween(userName.length, min, max)){
        showError(userName, `Username must be between ${min} and ${max} characters.`);
    }else{
        showSuccess(userName);
        valid = true;
    }

    return valid;
}


// Check useremail
const checkEmail = () => {

    let valid = false;
    const email = userEmail.value.trim();

    if(!isRequired(email)){
        showError(userEmail, 'Email cannot be blank');
    }else if(!isEmailValid(email)){
        showError(userEmail, `Email is not valid`);
    }else{
        showSuccess(userEmail);
        valid = true;
    }

    return valid;
}


// Check useremail
const checkPassword = () => {

    let valid = false;
    const password = passwordEl.value.trim();

    if(!isRequired(password)){
        showError(passwordEl, 'Password cannot be blank');
    }else if(!isPasswordSecure(password)){
        showError(passwordEl, `Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)`);
    }else{
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
}

// Check useremail
const checkConfirmPassword = () => {

    let valid = false;
    const passwordConfirm = passwordElCon.value.trim();
    const password = passwordEl.value.trim();

    if(!isRequired(passwordConfirm)){
        showError(passwordElCon, 'Please enter the password again');
    }else if(password !== passwordConfirm){
        showError(passwordElCon, `Confirm password does not match`);
    }else{
        showSuccess(passwordElCon);
        valid = true;
    }

    return valid;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    //Validate forms
    let isUserNameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUserNameValid && 
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
    
    // Submit to the server if the form is valid
    if(isFormValid){
        console.log('Valid data submitted');
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;

    return(...args) => {
        // cancel the previous timer
        if(timeoutId){
            clearTimeout(timeoutId);
        }

        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    }
}

form.addEventListener('input', debounce(function(e){
    switch(e.target.id){
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
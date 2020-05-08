//console.log("Hello world from Javascript");
//alert("Hello and welcome to my page about cool stuff!");

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
var messages = [];
let wordArr = userName.value.split(" ").map(item => item.trim());

form.addEventListener("submit", (e)=> {

    if (isEmptyOrSpaces(userName.value)) {
        let errorMessage = "Name is required.";
        setInputUserNameError(errorMessage);
    }
    if (!isNameOnlyLettersAndSpaces(userName.value)) {
        let errorMessage = "Name cannot contain special characters or numbers.";
        setInputUserNameError(errorMessage);
    }
    if (userName.value.length > 20) {
        let errorMessage = "Name is too long.";
        setInputUserNameError(errorMessage);
    }
    for (i=0; i< wordArr.length; i++) {
        if (isFirstLetterLowerCase(userName.value)) {
            let errorMessage = "Name should not start with lowercase character.";
            setInputUserNameError(errorMessage);
            {break}
        }
    }

    if (isEmptyOrSpaces(email.value)) {
        let errorMessage = "Email is required.";
        setInputUserNameError(errorMessage);
    }
    if (!isValidEmail(email.value)) {
        let errorMessage = "Email is not in a correct format.";
        setInputUserNameError(errorMessage);
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(" ");
        messages = [];
    }
    else {
        alert("Your message was sent to us. We will reply shortly.")
    }
})

//VALIDATION FUNCTIONS
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}
function isFirstLetterLowerCase(str) {
    return str[0] == str[0].toLowerCase();
}
function isNameOnlyLettersAndSpaces(str) {
    return /^[a-zA-Z\s]*$/.test(str);
}
function isValidEmail(str) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
}
//GENERAL FUNCTIONS
function setInputUserNameError(errorMessagge) {
    messages.push(errorMessagge);
    userName.placeholder = errorMessagge;
}

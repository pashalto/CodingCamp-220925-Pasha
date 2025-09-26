welcomeMessage();

function welcomeMessage() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("username").innerHTML = userName;
    } else {
        alert("Welcome to our website, Guest!");
    }   
}

function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    console.log(name, email, message);
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
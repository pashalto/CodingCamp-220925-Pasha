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
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

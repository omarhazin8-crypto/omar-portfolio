const button = document.getElementById("contactButton");

const message = document.getElementById("message");

button.addEventListener("click", function () {

    message.textContent =
        "Thanks for visiting my portfolio! Feel free to contact me.";

});
const darkModeButton =
    document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});
const fadeText = document.getElementById("fadeText");
const fadeDiv = document.getElementById("fadeDiv");

function fadeIn() {
    fadeText.classList.add("fadeIn");
    fadeDiv.classList.add("fadeIn");
    
    fadeText.style.opacity = "1";
    fadeDiv.style.opacity = "1";
}
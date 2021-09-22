// extract DOM elements
const image = document.getElementById("image");
const btn = document.getElementById("btn");

// Makes image spin in selected direction (spinDirection) for input number of iterations (spinCount)
function spinItem(spinCount, spinDirection) {
    if (spinDirection == "right") {
        // clear .spinLeft in case of user switching options
        if (image.classList.contains("spinLeft")) 
        {image.classList.remove("spinLeft");}

        // set iteration count
        image.style.animationIterationCount = spinCount;

        if (image.classList.contains("spinRight")) {
            image.classList.remove("spinRight");
            void image.offsetWidth;  // reset CSS animation

            image.classList.add("spinRight");
        } else {
            image.classList.add("spinRight");
        }
    } else if (spinDirection == "left") {
        // clear .spinRight in case of user switching options
        if (image.classList.contains("spinRight")) 
        {image.classList.remove("spinRight");}

        // set iteration count
        image.style.animationIterationCount = spinCount;

        if (image.classList.contains("spinLeft")) {
            image.classList.remove("spinLeft");
            void image.offsetWidth;  // reset CSS animation
            
            image.classList.add("spinLeft");
        } else {
            image.classList.add("spinLeft");
        }
    } else {
        // alert if user has not selected a dropdown option
        alert("Please choose a spin direction.");
    }

}

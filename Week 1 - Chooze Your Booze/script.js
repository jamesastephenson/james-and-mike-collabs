// Get DOM elements
const dropdown = document.getElementById("dropdown");
const button = document.getElementById("button");
const drinkName = document.getElementById("drinkName");
const image = document.getElementById("image");
const ingredient1 = document.getElementById("ingredient1");
const ingredient2 = document.getElementById("ingredient2");
const ingredient3 = document.getElementById("ingredient3");
const instructions = document.getElementById("instructions");
const panel = document.getElementById("drinkPage");

var spiritFlag = "";

// Get value from dropdown and call fadeIn() and getDrinks()
function selectAlcohol() {
    spiritFlag = dropdown.value;
    if (spiritFlag == "-") {alert("Please Select a Spirit");}
    else {fadeIn(); getDrinks(spiritFlag);}
}

// Get drink data from json with fetch api and updates DOM
    // There is definitely a more efficient way to do this
function getDrinks(spiritType) {
    if (spiritType == "gin") {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                drinkName.innerHTML = data.gin[0].drinkName;
                image.src = "martini.PNG";
                ingredient1.innerHTML = data.gin[0].ingredient1;
                ingredient2.innerHTML = data.gin[0].ingredient2;
                ingredient3.innerHTML = data.gin[0].ingredient3;
                instructions.innerHTML = data.gin[0].instructions;
            });
    } else if (spiritType == "rum") {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                drinkName.innerHTML = data.rum[0].drinkName;
                image.src = "cuba-libre.PNG";
                ingredient1.innerHTML = data.rum[0].ingredient1;
                ingredient2.innerHTML = data.rum[0].ingredient2;
                ingredient3.innerHTML = data.rum[0].ingredient3;
                instructions.innerHTML = data.rum[0].instructions;
            });
    } else if (spiritType == "tequila") {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                drinkName.innerHTML = data.tequila[0].drinkName;
                image.src = "margarita.PNG";
                ingredient1.innerHTML = data.tequila[0].ingredient1;
                ingredient2.innerHTML = data.tequila[0].ingredient2;
                ingredient3.innerHTML = data.tequila[0].ingredient3;
                instructions.innerHTML = data.tequila[0].instructions;
            });
    } else if (spiritType == "vodka") {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                drinkName.innerHTML = data.vodka[0].drinkName;
                image.src = "melon-ball.PNG";
                ingredient1.innerHTML = data.vodka[0].ingredient1;
                ingredient2.innerHTML = data.vodka[0].ingredient2;
                ingredient3.innerHTML = data.vodka[0].ingredient3;
                instructions.innerHTML = data.vodka[0].instructions;
            });
    } else if (spiritType == "whiskey") {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                drinkName.innerHTML = data.whiskey[0].drinkName;
                image.src = "manhattan.PNG";
                ingredient1.innerHTML = data.whiskey[0].ingredient1;
                ingredient2.innerHTML = data.whiskey[0].ingredient2;
                ingredient3.innerHTML = data.whiskey[0].ingredient3;
                instructions.innerHTML = data.whiskey[0].instructions;
            });
    }
}

// adds and removes fadePanel and fadePanel2 depending on DOM state
function fadeIn() {
    panel.classList.add("fadePanel");
    void panel.offsetWidth;  // reset CSS animation
    setTimeout(() => panel.classList.remove("fadePanel"), 1000 );  //the line that fixed everything
    panel.classList.remove("hidden"); 
}

// Event Listeners ---------------
button.addEventListener("click", selectAlcohol);
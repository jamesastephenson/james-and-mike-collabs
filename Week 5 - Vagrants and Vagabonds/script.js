// Get DOM elements
const gender = document.getElementById('gender');
const race = document.getElementById('race');
const submit = document.getElementById('submit');

// Arrays for random generation
var firstNamesMale = ['John', 'Legolas', 'George', 'Richard',  'Danny', 'Huckleberry', 'Clint', 'Woodsworth', 'Reginald'];
var firstNamesFemale = ['Clementine', 'River', 'Cordelia', 'Shiela', 'Joan', 'Cathryn', 'Geneva', 'Rita', 'Layla'];
var firstNamesGenderNeutral = ['Snake', 'Crow', 'Tiger', 'Bergamot', 'Murgatroyd', 'Morgan', 'Alex', 'Nyx', 'Cyprus'];
var lastNames = ['Butler', 'Cooper', 'Professional', 'Dwarvinson', 'Elfman', 'Woods', 'Kabong', 'Convention', 'Fauntleroy', 'Hill', 
                 'DeVito', 'Waldorf', 'Adler', 'Beauregard', 'Cobaggins', 'Sherpshire', 'West', 'Lothario', 'Anderson', 'Crump'];
var races = ['Human', 'Dwarf', 'Elf', 'Halfling'];
var classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard'];
var genders = ['Male', 'Female', 'Nonbinary'];
var alignments = ['LG', 'LN', 'LE', 'NG', 'TN', 'NE', 'CG', 'CN', 'CE'];
var likesAndDislikes = [
    'Adventure', 'Long Walks on the Beach', 'Literature', 'Money', 'Cooking', 
    'Knives', 'Swords', 'Music', 'Violence', 'Empathy', 
    'Corn', 'Potions', 'Portals', 'Peril', 'Nature',
    'Architecture', 'Skeletons', 'Goblins', 'Charity', 'Fine Linen',
    'Vagrants', 'Vagabonds', 'Dragons', 'Dungeons', 'Scholarship'];

// Generate random name
function generateName() {
    // define our array
    var nameArr = [];

    // contain logic if it's a male, female, or gender neutral name
    if (gender.value == 'Male') {nameArr = firstNamesMale.concat(firstNamesGenderNeutral);} 
    else if (gender.value == 'Female') {nameArr = firstNamesFemale.concat(firstNamesGenderNeutral);} 
    else if (gender.value == 'Nonbinary') {nameArr = firstNamesGenderNeutral;} 
    else {nameArr = firstNamesMale.concat(firstNamesFemale, firstNamesGenderNeutral);}

    // concatenate the name w/ random index position
    return `${nameArr[Math.floor(Math.random() * nameArr.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

// Generate random alignment 
function generateAlignment() {return alignments[Math.floor(Math.random() * alignments.length)];}

// Generate random class
function generateClass() {return classes[Math.floor(Math.random() * classes.length)];}

// Generate random gender or user choice
function generateGender() {
    if (gender.value == "Male") {return "Male";}
    else if (gender.value == "Female") {return "Female";}
    else if (gender.value == "Nonbinary") {return "Nonbinary";}
    else {return genders[Math.floor(Math.random() * genders.length)];}
}

// Generate random likes / dislikes
function generateLikesAndDislikes() {return likesAndDislikes[Math.floor(Math.random() * likesAndDislikes.length)];}

// Generate random race or user choice
function generateRace() {
    if (race.value == "Human") {return "Human";}
    else if (race.value == "Dwarf") {return "Dwarf";}
    else if (race.value == "Elf") {return "Elf";}
    else if (race.value == "Halfling") {return "Halfling";}
    else {return races[Math.floor(Math.random() * races.length)];}
}

// six sided die roll
function d6Roll() {return Math.floor(Math.random() * 6) + 1;}

// 3 d6 roll
function generateBaseStat() {return d6Roll() + d6Roll() + d6Roll();}

// call all functions and output to html
function createChar() {
    var likes = generateLikesAndDislikes();
    var dislikes = generateLikesAndDislikes();

    while (dislikes == likes) {dislikes = generateLikesAndDislikes();}

    document.getElementById('outputName').innerHTML = generateName();
    document.getElementById('outputRace').innerHTML = generateRace();
    document.getElementById('outputGender').innerHTML = generateGender();
    document.getElementById('outputClass').innerHTML = generateClass();
    document.getElementById('outputAlignment').innerHTML = generateAlignment();
    document.getElementById('outputSTR').innerHTML = generateBaseStat();
    document.getElementById('outputDEX').innerHTML = generateBaseStat();
    document.getElementById('outputCON').innerHTML = generateBaseStat();
    document.getElementById('outputINT').innerHTML = generateBaseStat();
    document.getElementById('outputWIS').innerHTML = generateBaseStat();
    document.getElementById('outputCHA').innerHTML = generateBaseStat();
    document.getElementById('outputLikes').innerHTML = likes;
    document.getElementById('outputDislikes').innerHTML = dislikes;
}

submit.addEventListener('click', createChar);
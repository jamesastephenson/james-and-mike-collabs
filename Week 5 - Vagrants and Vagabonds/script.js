// note to self: let checked status of radio buttons or dropdown choices be used as an argument in functions
    // this way you can change what the function will output based on this, rather than making a million different functions

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

function generateName() {
    // define our array
    var nameArr = [];

    // contain logic if it's a male, female, or gender neutral name
    if (gender.value == 'Male') {nameArr = firstNamesMale.concat(firstNamesGenderNeutral);} 
    else if (gender.value == 'Female') {nameArr = firstNamesFemale.concat(firstNamesGenderNeutral);} 
    else if (gender.value == 'Nonbinary') {nameArr = firstNamesGenderNeutral;} 
    else {nameArr = firstNamesMale.concat(firstNamesFemale, firstNamesGenderNeutral);}

    // concatenate the name
    return `${nameArr[Math.floor(Math.random() * nameArr.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function generateAlignment() {return alignments[Math.floor(Math.random() * alignments.length)];}

function generateClass() {return classes[Math.floor(Math.random() * classes.length)];}

function generateGender() {
    if (gender.value == "Male") {return "Male";}
    else if (gender.value == "Female") {return "Female";}
    else if (gender.value == "Nonbinary") {return "Nonbinary";}
    else {return genders[Math.floor(Math.random() * genders.length)];}
}

function generateLikesAndDislikes() {return likesAndDislikes[Math.floor(Math.random() * likesAndDislikes.length)];}

function generateRace() {
    if (race.value == "Human") {return "Human";}
    else if (race.value == "Dwarf") {return "Dwarf";}
    else if (race.value == "Elf") {return "Elf";}
    else if (race.value == "Halfling") {return "Halfling";}
    else {return races[Math.floor(Math.random() * races.length)];}
    }

function d6Roll() {return Math.floor(Math.random() * 6);}

function generateBaseStat() {return d6Roll() + d6Roll() + d6Roll();}

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
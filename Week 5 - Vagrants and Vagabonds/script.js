// note to self: let checked status of radio buttons or dropdown choices be used as an argument in functions
    // this way you can change what the function will output based on this, rather than making a million different functions

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

/*
function generateName() {
    // define our array
    var nameArr = [];

    // contain logic if it's a male, female, or gender neutral name
    if (checkbox says it's male names) {
        nameArr = firstNamesMale.concat(firstNamesGenderNeutral);
    } else if (checkbox says female names only) {
        nameArr = firstNamesFemale.concat(firstNamesGenderNeutral);
    } else {
        nameArr = firstNamesMale.concat(firstnamesFemale, firstNamesGenderNeutral);
    }

    // concatenate the name
    return `${nameArr[Math.random() * nameArr.length()]} ${lastNames[Math.random() * lastNames.length()]}`;
}
*/

function generateAlignment() {
    return alignments[Math.random() * alignments.length()];
}

function generateClass() {
    return classes[Math.random() * classes.length()];
}

function generateGender() {
    return genders[Math.random() * genders.length()];
}

function generateLikesAndDislikes() {
    return likesAndDislikes[Math.random() * likesAndDislikes.length()];
}

function generateRace() {
    return races[Math.random() * races.length()];
}

function d6Roll() {
    return Math.random() * 6;
}

function generateBaseStat() {
    return d6Roll() + d6Roll() + d6Roll();
}

function createChar() {
    var charRace = generateRace();
    var charGender = generateGender();
    var charClass = generateClass();
    var charAlignment = generateAlignment();
    var charStr = generateBaseStat();
    var charDex = generateBaseStat();
    var charCon = generateBaseStat();
    var charInt = generateBaseStat();
    var charWis = generateBaseStat();
    var charCha = generateBaseStat();
    var likes = generateLikesAndDislikes();
    var dislikes = generateLikesAndDislikes();

    while (dislikes == likes) {dislikes = generateLikesAndDislikes();}
}
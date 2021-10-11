// note to self: let checked status of radio buttons or dropdown choices be used as an argument in functions
    // this way you can change what the function will output based on this, rather than making a million different functions

// Arrays for random generation
var classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorceror', 'Warlock', 'Wizard'];
var genders = ['Male', 'Female', 'Nonbinary'];
var alignments = ['LG', 'LN', 'LE', 'NG', 'TN', 'NE', 'CG', 'CN', 'CE'];

function generateAlignment() {
    return alignments[Math.random() * alignments.length()];
}

function generateClass() {
    return classes[Math.random() * classes.length()];
}

function generateGender() {
    return genders[Math.random() * genders.length()];
}

function d6Roll() {
    return Math.random() * 6;
}

function generateBaseStat() {
    return d6Roll() + d6Roll() + d6Roll();
}

function createChar() {
    var charGender = generateGender();
    var charClass = generateClass();
    var charAlignment = generateAlignment();
    var charStr = generateBaseStat();
    var charDex = generateBaseStat();
    var charCon = generateBaseStat();
    var charInt = generateBaseStat();
    var charWis = generateBaseStat();
    var charCha = generateBaseStat();
}
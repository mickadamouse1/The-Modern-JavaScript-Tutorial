console.log("1 ---------------------------- 1");

function showMessage(message) {
    console.log(message);
}

showMessage("Hey, I'm a message!");
showMessage("Hey again!");
showMessage("and again...");

console.log();
console.log("2 ---------------------------- 2");

function showNumber() {
    let num = 255;
    console.log(num);
}

showNumber();
// "console.log(num)" would not work, because the variable is local to the function

console.log();
console.log("3 ---------------------------- 3");

let fruit1 = "Apple";
let fruit2 = "Banana";

function showFruit() {
    let fruit3 = "Orange";
    console.log(`${fruit1}, ${fruit2}, ${fruit3}`);
}

showFruit();

console.log();
console.log("4 ---------------------------- 4");

let tree = "Fresh Oak";

function ageTree() {
    tree = "Old Oak";
}

console.log(tree);

ageTree(); // changes the tree value

console.log(tree);

console.log();
console.log("5 ---------------------------- 5");

let colour = "Saffron";

function showColour() {
    let colour = "Green";
    console.log(colour);
}

console.log(colour);
showColour();
console.log(colour);

console.log();
console.log("6 ---------------------------- 6");

function say(from, text) {
    console.log(`${from}: ${text}`);
}

say("James", "Hey, I'm James!");

console.log();
console.log("7 ---------------------------- 7");

function say2(from, text) {
    from = `*${from}*`;
    console.log(`${from}: ${text}`);
}

let from = "Ann";
say2(from, "Ooooweeeee!");

console.log();
console.log("8 ---------------------------- 8");

function badFunction(x) {
    console.log(x);
}

badFunction("If the function parameter is empty you get:");
badFunction();

console.log();
console.log("9 ---------------------------- 9");

function defaultParameters(from, text = "No message given.") {
    from = `*${from}*`;
    console.log(`${from}: ${text}`);
}

defaultParameters("Anne");
defaultParameters("James", "Hoi hoi!");

console.log();
console.log("10 ---------------------------- 10");

function generateDescription(prefix = generatePrefix(),
                            name = generateName(), 
                            adj = generateAdj(),
                            noun = generateNoun()) {

    console.log(`${prefix} ${name}, The ${adj} ${noun}!`);

}

function generatePrefix() {
    let arr = ["King", "Queen", "Badman", "Killer", "Slayer", "Mighty", "Count"];
    return arr[Math.floor(Math.random() * arr.length)]
}

function generateName() {
    let arr = ["Larry", "Barry", "James", "Gobbe", "Hoit", "Gimli", "Sin"];
    return arr[Math.floor(Math.random() * arr.length)]
}

function generateAdj() {
    let arr = ["Smelly", "Hairy", "Slimy", "Scary", "Mighty", "Dry", "Wet"];
    return arr[Math.floor(Math.random() * arr.length)]
}

function generateNoun() {
    let arr = ["Warrior", "Knight", "Horse", "Sheep", "Person", "Cat", "Puppet"];
    return arr[Math.floor(Math.random() * arr.length)]
}

generateDescription("Lord", "James", "Holy", "King");
generateDescription();
generateDescription();
generateDescription();
generateDescription();

// ##### Default VAlues"!!!!! ####### //
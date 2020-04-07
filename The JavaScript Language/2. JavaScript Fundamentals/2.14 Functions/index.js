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

console.log();
console.log("11 ---------------------------- 11");

function makeSauce(spice, origin) {
    if (origin == undefined) {
        origin = "Earth";
    }

    console.log(`${origin}ly ${spice}`);
}

makeSauce();
makeSauce("Hot Sauce");

console.log();
console.log("12 ---------------------------- 12");

function makeSpice(spice, origin) {
    origin = origin || "Mars";

    console.log(`${origin}ley ${spice}`);
}

makeSpice();
makeSpice("Hot Spice");

console.log();
console.log("13 ---------------------------- 13");

function sum(a = 0, b = 0) {
    return a + b;
}

let result1 = sum(2, 4);
let result2 = sum();
let result3 = sum(999999, 999999);
console.log(`${result1}, ${result2}, ${result3}`);

console.log();
console.log("14 ---------------------------- 14");

function boardBoat(name, age = 0) {
    if (age == 0) {
        return (`${name} gave no valid age.`);
    } else if (age < 18) {
        let remaining = 18 - age;
        return (`${name} is not old enough. Wait another ${remaining} years.`);
    }

    return (`${name} is booked for seat ${Math.ceil(Math.random() * 99)}.`);
}

let ticketJames = boardBoat("James", 15);
let ticketBilly = boardBoat("Billy", 9);
let ticketLilly = boardBoat("Lilly", 19);
let ticketBabbaya = boardBoat("Babbaya");

console.log(ticketJames);
console.log(ticketBilly);
console.log(ticketLilly);
console.log(ticketBabbaya);

console.log();
console.log("15 ---------------------------- 15");

let ela = {
    name: "Ela",
    age: 15,
    height: 150,
    tooTall: false
}

let bond = {
    name: "Bond",
    age: 66,
    height: 176,
    tooTall: false
}

function checkHeight(height) {
    if (height > 150) {
        return true;
    }
    return false;
}

ela.tooTall = checkHeight(ela.height);
bond.tooTall = checkHeight(bond.height);

console.log(`Max height: 150cm.`);
let people = [ela, bond];

for (let i = 0; i < people.length; i++) {
    console.log(`Is ${people[i].name} too tall?\n${people[i].tooTall}. ${people[i].name} is ${people[i].height}cm tall.`);
}

console.log();
console.log("16 ---------------------------- 16");

function printWord(word) {
    if (word == undefined) return;
    console.log(word);
}

printWord("Hey");
printWord();
printWord("Hey again");

console.log();
console.log("TASK 1 ---------------------------- TASK 1");

function checkAge1(age) {
    return (age > 18) ? true : false;
}

let kesi = checkAge1(12);
let kayne = checkAge1(22);
console.log(`Kesi: ${kesi}, Kayne: ${kayne}.`);

function checkAge2(age) {
    return (age > 18) || false;
}

let vinny = checkAge2(22);
let thommas = checkAge2(14);
console.log(`Vinny: ${vinny}, Thommas: ${thommas}.`);

console.log();
console.log("TASK 2 ---------------------------- TASK 2");

function min(x, y) {
    return (x < y) ? x : y;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

console.log();
console.log("TASK 3 ---------------------------- TASK 3");

function pow(x, n) {
    return x ** n;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
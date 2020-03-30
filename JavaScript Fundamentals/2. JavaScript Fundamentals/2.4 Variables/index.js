
// this is a variable, a box that stores data 
// for example: a message.

// this message is currently empty.
let message;

// this adds a message to the message variable

message = "Hello";

// this then prints the message contents to the console for testing purposes
console.log(message);

// However, declaring a variable with data stored can all be done using one line of code

let message2 = "Hello Again!";

console.log(message2);

// To expand on this, multiple variables can be declared at once

// this is, however, very messy and hard to read (therefore not recommended)

let user = "James", age = 25, id = 08;

console.log(user, age, id);

// cleaner but still more complicated

let user2 = "Hoit",
    age2 = 33,
    id2 = 642;

console.log(user2, age2, id2);

// changing variables can be done by simply re-declaring them

let food;

food = "Sausage";

console.log(food);

food = "Bread";

console.log(food);

// a variable can be assigned to another variable, assuming it has data to pass on

let name1 = "Jimmy";

let name2 = name1;

console.log(name1);

// variable can only be named using letters, numbers, dollar signs and underscores

let ham69 = "ham69";

let $hugo$ = "$hugo$";

let _underpants$$__9920 = "_underpants$$__9920";

console.log(ham69, $hugo$, _underpants$$__9920);

// however, the first character cannot be a digit

// "let 6masters"  will not work

// When a variable is multiple words, camel casing is used to ensure readability

let howToFindNumber = "Check the Blue Pages";

let howtofindnumber = "Check the Yellow Pages";

console.log(howtofindnumber + " -- " + howToFindNumber);

// foreign words are allowed when creating variables

let 我 = "What does '我' even mean?";

console.log(我);

// keywords such as "let, return, function etc." cannot be used as variable names

// const variables are variables that cannot be changed once declared

const myBirthday = "01/03/1997";

console.log(myBirthday);

// naming const variable with uppercase letters is used for variables that hold hard to remember valuses

const COLOUR_RED = "#F00";
const COLOUR_GREEN = "#0F0";
const COLOUR_BLUE = "#00F";
const COLOUR_ORANGE = "#FF7F00";

let colour = COLOUR_ORANGE;
console.log(colour);

// TASK

let admin;
let name;

name = "John";
admin = name;
console.log(admin);

// TASK 2 

const myPlanet = "Planet Earth";
let currentVisitors = ["Jill", "James", "Jimir", "Jone"];

// TASK 3

const BIRTHDAY = "18/04/1982";

const age3 = console.log(BIRTHDAY);
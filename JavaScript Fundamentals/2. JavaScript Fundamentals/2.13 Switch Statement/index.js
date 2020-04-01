console.log("1 ---------------------------- 1");

let x = prompt("1. Pick a number between 1 & 3");
console.log("Pick a number between 1 & 3");
console.log(x);


switch(+x) {
    case 1:
        console.log("x = 1");
        break;
    case 2: 
        console.log("x = 2");
        break;
    case 3:
        console.log("x = 3");
        break;
    default: 
        (x > 3) ? console.log("Too Large") : console.log("Too Small");
}

console.log();
console.log("2 ---------------------------- 2");

let a = prompt("What is 2 + 2");
console.log("What is 2 + 2?");
console.log(a);

switch (+a) {
    case 4: 
        console.log("Correct!");
        break;
    default: (a > 4) ? console.log("Too Large") : console.log("Too Small");
}

console.log();
console.log("3 ---------------------------- 3");

let y = 5;

switch (y) {
    case 5: 
        console.log(y);
    case 6: 
        console.log(y);
    case 7:
        console.log(y);
}

console.log();
console.log("4 ---------------------------- 4");

let v = 10;
let vv = 0;

switch (v) {
    case vv + 10:
        console.log("Oohweee");
        break;
    default: console.log("awh damn");
}

console.log();
console.log("5 ---------------------------- 5");

let p = prompt("Enter any number");
let pp = p % 2;

switch(+pp) {
    case 0: 
        (p != "") ? console.log(`${p} is even!`) : console.log("Didn't enter a number...");
        break;
    case 1: 
        console.log(`${p} is odd!`);
        break;
    default:
        console.log("That's not a number... or it was simply too big :P");
}

console.log();
console.log("6 ---------------------------- 6");

let b = prompt("Enter a number between 0 and 10");

switch(+b) {
    case 1:
    case 3:
    case 5:
    case 7: 
    case 9:
        console.log(`${b} is odd!`);
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10: 
        console.log(`${b} is even!`);
        break;
    default: 
        (b == "") ? console.log("Didn't enter a number.") :
        (b == 0) ? console.log(`${b} is neither even nor odd.`) :
        (b > 0) ? console.log(`${b} is greater than 10.`) :
        console.log(`${b} is less than 0`);
}

console.log();
console.log("# ---------- TASK 1 ---------- #");

let browser = prompt("What browser are you using? (i.e: Edge, Chrome, Opera etc.)").toLowerCase();

if (browser == "edge") {
    console.log("You've got the Edge!");
} else if (browser == "chrome" 
           || browser == "firefox" 
           || browser == "safari" 
           || browser == "opera") {
               console.log("Okay, we support these browsers too");
           } else {
               console.log("We hope that this page looks ok!");
}

console.log();
console.log("# ---------- TASK 2 ---------- #");

let apple = +prompt("a?", "");

switch (apple) {
    case 0:
        console.log(0);
        break;
    case 1: 
        console.log(1);
        break;
    case 2:
    case 3:
        console.log("2,3");
        break;
}
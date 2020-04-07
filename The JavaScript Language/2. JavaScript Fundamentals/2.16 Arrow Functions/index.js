console.log("1 ---------------------------- 1");

let sum = (a, b) => {
    console.log(`${a} + ${b} = ${a + b}`);
}

sum(23, 33);

console.log();
console.log("2 ---------------------------- 2");

sum = (a, b) => a + b;

let fifty = sum(20, 30);
console.log(fifty);

console.log();
console.log("3 ---------------------------- 3");

let doubleIt = n => n * 2;

let result1 = doubleIt(19);
console.log(result1);

console.log();
console.log("4 ---------------------------- 4");

let sayHi = () => console.log("Hi!");

sayHi();

console.log();
console.log("5 ---------------------------- 5");

let ofAge = confirm("Are you 18+ years old?");

let welcome = (ofAge) ? 
    () => console.log("Welcome!") :
    () => console.log("Go away, kid!");

welcome();

console.log();
console.log("6 ---------------------------- 6");

let multiply = (a, b) => {
    return (`${a} * ${b} = ${a * b}`);
};

let result2 = multiply(88, 42);
console.log(result2);

console.log();
console.log("TASK ---------------------------- TASK");

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask("Do you agree?",
    function() {console.log("Agreed!");},
    function() {console.log("Disagreed...");});

let ask2 = (question, yes, no) => {
    (confirm(question)) ? yes() : no();
};

ask2("Have you got the cash?",
    () => {console.log("Gimme!");},
    () => {console.log("Go get it then!");}
);
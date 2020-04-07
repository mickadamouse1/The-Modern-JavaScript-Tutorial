console.log("1 ---------------------------- 1");

function sayHi() {
    console.log("Hi");
}

sayHi();

console.log();
console.log("2 ---------------------------- 2");

let sayHey = function() {
    console.log("Hey");
};

sayHey();

console.log(sayHey);

let sayHey2 = sayHey;

sayHey2();

console.log();
console.log("3 ---------------------------- 3");

function ask(question, yes, no) {
    confirm(question) ? yes() : no();
};

let showOk = function() {
    console.log("You agreed.");
};

let showCancel = function() {
    console.log("You cancelled the execution.");
};

ask("Do you agree?", showOk, showCancel);

console.log();
console.log("4 ---------------------------- 4");

function rideBike(question, yes, no) {
    (confirm(question)) ? yes() : no();
};

let canRide = function() {
    console.log("You ride the bike!");
};

let cantRide = function() {
    console.log("You can't even ride a bike...");
};

rideBike("Can you ride a bike?", canRide, cantRide);

console.log();
console.log("5 ---------------------------- 5");

function driveCar(question, yes, no) {
    (confirm(question)) ? yes() : no();
};

driveCar("Can you drive?",
         function() {console.log("You drive the car!");},
         function() {console.log("You can't even drive...");}
);


console.log();
console.log("6 ---------------------------- 6");

let five = sum(2, 3);
console.log(five);

function sum(a, b) {
    return a + b;
}

//let four = sum2(2, 2); WONT WORK, becuase the function isn't declared globally unlike the function above.

let sum2 = function(a, b) {
    return a + b;
};

let seven = sum2(4, 3);
console.log(seven);

console.log();
console.log("7 ---------------------------- 7");

function makeCar() {
    
    addTires();

    function addTires() {
        console.log("Added tires.");
    }

    // addDoors(); Function not declared yet.

    let addDoors = function() {
        console.log("Added doors.");
    }

    addDoors();
}

makeCar();
// addTires(); Not declared globally, it's block leveled within the function "MakeCar".

console.log();
console.log("8 ---------------------------- 8");

let addWings;
let addWheels;

function makePlane() {

    // addWings(); Function not declared yet.

    addWings = function() {
        console.log("Added wings!");
    }

    addWings();

    // addWheels(); Function not declared yet

    addWheels = function() {
        console.log("Added wheels!");
    }

    addWheels();
};

makePlane();
addWings(); // Works because the variable was declared globally before being given a value via function.
addWheels(); // ^^

console.log();
console.log("9 ---------------------------- 9");

let ofAge = confirm("Are you 18+ years old?");

let welcome = (ofAge) ? 
    function() {console.log("Welcome!");} : 
    function() {console.log("Go Away, Kid.");};

welcome();

console.log();
console.log("10 ---------------------------- 10");

let addFive = function(num) {
    console.log(num + 5);
}

addFive(6);

addFive = function(num) {
    console.log(`${num} + 5 = ${num + 5}`);
}

addFive(3);

function addTwelve(num) {
    console.log(num + 12); // This would never get used because it gets redeclared before it can ever run.
}

addTwelve(4);

function addTwelve(num) {
    console.log(`${num} + 12 = ${num + 12}`);
}
console.log("1 -------------------------------------------- 1");

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
  console.log(`Power ${n} is not supported,
    please enter a non-negative integer number.`);
} else {
  console.log( pow(x, n) );
}

console.log();
console.log("2 -------------------------------------------- 2");

// bad
if (1 < 2) {console.log("1 is less than 2.");}

//bad
if (1 < 2)
  console.log("1 is less than 2..");

// is okay
if (1 < 2) console.log("1 is less than 2...");

// the best way

if (1 < 2) {
  console.log("1 is less than 2!");
}

console.log();
console.log("3 -------------------------------------------- 3");

let str = `ECMA International's TC39 is a group of
JavaScript developers, implementers, academics, and
more, collaborating with the community to maintain
and evolve the definition of JavaScript.
`;

console.log(str);

console.log();
console.log("4 -------------------------------------------- 4");

if (
  10 < 50 &&
  50 < 100 &&
  7 < 2 ||
  5 === 5
) {
  console.log("Something went right...");
}

if (1442346 > 17 &&
    56 < 352 &&
    54234 > 444 &&
    12 < 14
  ) {
  console.log("Looks like everything went right. But in an ugly way.");
}

if (17 < 1442346 
    && 56 < 352 
    && 54234 > 444 
    && 12 < 14
  ) {
    console.log("Looks like everything went right. But in a pretty way.");
}

console.log();
console.log("5 -------------------------------------------- 5");

function sum(x, n) {
  let num;

  num = x + n;

  return num;
}

console.log( sum(5, 5) );

console.log();
console.log("6 -------------------------------------------- 6");

for (let i = 0; i < 3; i++) {
  if (i == 2) {
    console.log("ah!");
  }
}

for (let i = 0; i < 3; i++) {
  if (i != 2) continue;
  console.log("ah!!!");
}

console.log();
console.log("7 -------------------------------------------- 7");

// less readable due to nesting

function sub(x, n) {
  if (n < 0) {
    console.log("Negative 'n' not supported.");
  } else {
    let result;

    result = x - n;

    return result;
  }
}


// more readable due to reduced nesting

function mult(x, n) {
  if (n < 0) {
    console.log("Negative 'n' is not supported.");
    return;
  }

  let result;

  result = x * n;

  return result;
}


console.log();
console.log("8 -------------------------------------------- 8");


/// UGLY VERSION ///

function createElement() {
  // ,,,
}

function setHandler(x) {
  // ,,,
}

function walkAround() {
  // ,,,
}

// the code which uses them

let elem = createElement();
setHandler(elem);
walkAround();

/// PRETTY VERSION ///

// code which uses them

let elem2 = createElement();
setHandler(elem);
walkAround();

function createElement() {
  // ,,,
}

function setHandler(x) {
  // ,,,
}

function walkAround() {
  // ,,,
}


console.log();
console.log("TASK ---------------------- TASK ---------------------- TASK");

function power(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x2 = prompt("number?", "");
let n2 = prompt("second number?", "");

if (n2 <= 0) {
  console.log(`Power ${n2} is not supported, please enter
    an integer number greater than 0.`);
} else {
  console.log( power(x2, n2) );
}
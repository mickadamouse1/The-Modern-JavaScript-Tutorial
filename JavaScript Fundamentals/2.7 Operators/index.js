// operands are the values that will be operated on by operators
let x1 = 1;
x1 = x1 + 10;

// Alternatively x1 += 10;

console.log(x1);

let x2 = 10;
console.log(`x2 = ${x2}`);
console.log(`(x2 = -x2 ) = ${x2 = -x2}`);
console.log("\n");

// string concatenation can be performed using the + operator

console.log(`Choco + late = ${"Choco" + "late"}`);
console.log("\n");

// If two integers are followed by a string, the operation will be performed on the itegers first, then they will be conncatenated with the string:

console.log(`2 + 2 + "2" = ${2 + 2 + "2"}`);

// However, using any operator other than the + operator will result in auto conversion to a number

console.log(`10 - 5 - "5" = ${10 - 5 - "5"}`);
console.log("\n");


//unaries convert values into numbers in the same way Number(x) does
let apples = "apples";
let num1 = "1";
let tru = true;
let emptyString = "";
console.log(`+apples = ${+apples}`);
console.log(`+num1 = ${+num1}`);
console.log(`+tru = ${+tru}`);
console.log(`+emptyString = ${+emptyString}`);
console.log("\n");

let bananas = "10";
let oranges = "20";

console.log(`bananas = ${bananas}`);
console.log(`oranges = ${oranges}`);
console.log(`bananas + oranges = ${bananas + oranges}`);
console.log("unary fixes this");
console.log(`+bananas + +oranges = ${+bananas + +oranges}`);
console.log("\n");

// assignment chaining

let a = b = c = 2 + 2;
console.log(`a = b = c = 2 + 2:`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log("\n");

let x = 1;
let y = 2;

let h = 3 - (x = y + 1);

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`h = 3 - (x = y + 1) = ${h}`);
console.log(`x = ${x}`);
console.log("\n");

console.log("Reaminer %:");

// % devides and then returns the remainder as an integer and never divides below zero

console.log(`5 % 2 = ${5 % 2}`);
console.log(`8 % 3 = ${8 % 3}`);
console.log(`6 % 3 = ${6 % 3}`);
console.log("\n");

console.log("Exponentiation **:");

// times the first number by itself as many times as the second number is defined

// 2 * 2  = 4
console.log(`2 ** 2 = ${2 ** 2}`);

// 2 * 2 * 2 = 8
console.log(`2 ** 3 = ${2 ** 3}`);

// 2 * 2 * 2 * 2 = 16
console.log(`2 ** 4 = ${2 ** 4}`);

// 4 * 0.5
console.log(`4 ** (1/2) = ${4 ** (1/2)}`);

// 8 * 0.33
console.log(`8 ** (1/3) = ${8 ** (1/3)}`);
console.log("\n");

console.log("Increment/Decrement ++/--:");

let counter = 2;
console.log(`counter = ${counter}`);
console.log("\n");

console.log(`++counter or counter++ = ${++counter}`);
counter = 2;

console.log(`--counter or counter-- = ${--counter}`);
counter = 2;
console.log("\n");

console.log("Note: Increment and Decrement can only be used on variables.");
console.log("\n");


console.log(`2 * ++counter = ${2 * ++counter}`);
console.log("\n");

console.log("Bitwise Operators:");
console.log("\n");
console.log("AND = &\nOR = |\nXOR = ^\nNOT = ~\nLEFT SHIFT = <<\nRIGHT SHIFT = >>\nZERO-FILL RIGHT SHIFT = >>>");
console.log("\n");

console.log("Comma Expressions:");
let numOfGrapes;
console.log(`numOfGrapes = (1 + 2, 5 + 5)\nOutputs:\n${numOfGrapes = (1 + 2, 5 + 5)}`);
console.log("\n")

// TASK 1

let aa = 1, bb = 1;

let cc = ++aa; // outputs 2
let dd = bb++; // outputs 1

// TASK 2

let ab = 2;

let abb = 1 + (ab *= 2); // outputs 5

// TASK 3

console.log(`"" + 1 + 0 = ${"" + 1 + 0}`); // outputs 10
console.log(`"" - 1 + 0 = ${"" - 1 + 0}`); // outputs -1
console.log(`true + false = ${true + false}`); // outputs 1
console.log(`6 / "3" = ${6 / "3"}`); // outputs 2
console.log(`"2" * "3" = ${"2" * "3"}`); // outputs 6
console.log(`4 + 5 + "px" = ${4 + 5 + "px"}`); // outputs 9px
console.log(`"$" + 4 + 5 = ${"$" + 4 + 5}`); // outputs $45
console.log(`"4" - 2 = ${"4" - 2}`); // outputs 2
console.log(`"4px" - 2 = ${"4px" - 2}`); // outputs NaN
console.log(`7 / 0 = ${7 / 0}`); // outputs Infinity
console.log(`" -9 " + 5 = ${" -9 " + 5}`); // outputs -9 5
console.log(`" -9 " - 5 = ${" -9 " - 5}`); // outputs -14
console.log(`null + 1 = ${null + 1}`); // outputs 1
console.log(`undefined + 1 = ${undefined + 1}`); // outputs NaN
console.log(`" \t \n" - 2 = ${" \t \n" - 2}`); // outputs -2
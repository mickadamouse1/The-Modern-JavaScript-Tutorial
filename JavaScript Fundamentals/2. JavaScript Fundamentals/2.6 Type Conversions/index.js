
// This shows the type of unevaluated operand stored in the variable "value"
let value = true;
console.log(typeof value);

console.log("\n");

// This converts the boolean variable "value" into a string variable

// String(x)

value = String(value);
console.log(typeof value);

console.log("\n");

// automatically converts both strings into numbers
console.log("str6 / int2 = " + "6" / 2);
console.log("str10 / str2 = " + "10" / "2");

console.log("\n");

// Converts strings to numbers using "Number(x)"

let int = "7";
console.log(typeof int);

int = Number(int);
console.log(typeof int);

console.log("\n");

console.log(`int7 + int10 = ${(7 + 10)}`)
console.log(`str7 + str10 = ${("7" + "10")}`);
console.log(`str7 + int10 = ${("7" + 10)}`);

console.log("\n");

let int1 = "1";
let int2 = "2";

console.log(`int1 = ${int1}`);
console.log(`int1 = ${typeof int1}`);
console.log("\n");

console.log(`int2 = ${int2}`);
console.log(`int2 = ${typeof int2}`);
console.log("\n");

console.log(`int1 + int2 = ${(int1 + int2)}`);

console.log("After string conversion:");
console.log("\n");

int1 = Number(int1);
int2 = Number(int2);

console.log(`int1 + int2 = ${(int1 + int2)}`);
console.log("\n")


let error = Number("Hey jimmy!");

console.log(`Number("Hey There's a Horse!") = ${error}`);
console.log("\n");


console.log("null is the same as 0");
console.log(`null + 10 = ${null + 10}`);
console.log("\n");

console.log(" Boolean(1) = " + Boolean(1) + "\n", 
             "Boolean(0) = " + Boolean(0) + "\n", 
             "Boolean('Hey!') = " + Boolean("Hey!") + "\n", 
             "Boolean('') = " + Boolean("") + "\n", 
             "Boolean('0') = " + Boolean("0"));
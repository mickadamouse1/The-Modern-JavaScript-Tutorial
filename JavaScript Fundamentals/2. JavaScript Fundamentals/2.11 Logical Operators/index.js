// 1 ------------------------------------------
console.log("1. ------------------------------------------");

let a = 4;
let b = 0;

let result = b || a;

console.log(`a = 4\nb = 0\nresult = b || a\nresult = ${result}`);

console.log();


// 2 ------------------------------------------
console.log("2. ------------------------------------------");

if (5 || false) {
    console.log(true);
}

console.log();


// 3 ------------------------------------------
console.log("3. ------------------------------------------");


let hour = 9;
let isWeekend = true;

(hour < 10 || hour > 18 || isWeekend) ? 
console.log("The office is closed") : 
console.log("The office is open");

console.log();


// 4 ------------------------------------------
console.log("4. ------------------------------------------");

let test1 = (1 || 0);
let test2 = (true || "Anything");
let test3 = (null || 1);
let test4 = (null || 0 || 1);
let test5 = (undefined || null || 0);

console.log(`test1 = (1 || 0)`);
console.log(`test1 = ${test1}`);
console.log();
console.log(`test2 = (true || "Anything")`);
console.log(`test2 = ${test2}`);
console.log();
console.log(`test3 = (null || 1)`);
console.log(`test3 = ${test3}`);
console.log();
console.log(`test4 = (null || 0 || 1)`);
console.log(`test4 = ${test4}`);
console.log();
console.log(`test5 = (undefined || null || 0)`);
console.log(`test5 = ${test5}`);

console.log();


// 5 ------------------------------------------
console.log("5. ------------------------------------------");

a = 2; 
b = 0;

result = (a && b);

console.log(`a = 2`);
console.log(`b = 0`);
console.log(`result = (a && b);`);
console.log(`result = ${result}`);

console.log();


// 6 ------------------------------------------
console.log("6. ------------------------------------------");

hour = 12;
let minute = 30;

(hour == 12 && minute == 30) ? 
console.log("The time is 12:30") : 
console.log("The time is not 12:30");

console.log();


// 7 ------------------------------------------
console.log("7. ------------------------------------------");

console.log(`if (1 && 0) `);
(1 && 0) ? 
console.log("Works.") :
console.log("Doesn't work...");

console.log();


// 8 ------------------------------------------
console.log("8. ------------------------------------------");

let x = 10;

(x > 0) && console.log("X is greater than 0");

console.log();


// TASK 1  ------------------------------------------
console.log("TASK 1. ------------------------------------------");

console.log(null || 2 || undefined); // 2


console.log();


// TASK 2  ------------------------------------------
console.log("TASK 2. ------------------------------------------");

console.log(alert(1) || 2 || alert(3)); // alert 1

console.log();


// TASK 3  ------------------------------------------
console.log("TASK 3. ------------------------------------------");

console.log(1 && null && 2); false

console.log();


// TASK 4  ------------------------------------------
console.log("TASK 4. ------------------------------------------");

age = 50;

if (!(age >= 14 && age <= 90)) {
    console.log("Age is not between 14 and 90");
}

console.log();


// TASK 5  ------------------------------------------
console.log("TASK 5. ------------------------------------------");

if (age >= 14 && age <= 90) {
    console.log("Age is between 14 and 90");
}


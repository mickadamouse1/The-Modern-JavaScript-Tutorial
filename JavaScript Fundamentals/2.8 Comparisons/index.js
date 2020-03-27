console.log(`(2 > 1) = ${2 > 1}`); // true
console.log(`(2 == 1) = ${2 == 1}`); // false
console.log(`(2 != 1) = ${2 != 1}`); // true
console.log();

let result = 5 > 4; // assings true to the variable
console.log(`result = 5 > 4`);
console.log(`Result: ${result}`);
console.log();

console.log(`('Z' > 'A') = ${'Z' > 'A'}`); // true
console.log(`('Glow' > 'Glee') = ${'Glow' > 'Glee'}`); // true
console.log(`('Bee' > 'Be') = ${'Bee' > 'Be'}`); // true
console.log(`('Z' > 'z') = ${'Z' > 'z'}`); // false
console.log(`('bass' > 'BASS') = ${'bass' > 'BASS'}`); // true
console.log();

console.log(`Strings are converted to numbers automatically when comparing`);
console.log(`('2' > 1) = ${'2' > 1}`); // true
console.log(`('01' == 1) = ${'01' == 1}`); // true
console.log(`(true == 1) = ${true == 1}`); // true
console.log(`(false == 0) = ${false == 0}`); // true
console.log();

console.log(`(0 == false) = ${0 == false}`); // true
console.log(`('' == false) = ${'' == false}`); // true
console.log(`Fix: using "===" checks for STRICT equality`);
console.log(`(0 === false) = ${0 === false}`); // false
console.log(`('' === false) = ${'' === false}`); // false
console.log(`(0 !== false) = ${0 !== false}`); // true
console.log();

console.log(`(null === undefined) = ${null === undefined}`); // false
console.log(`(null == undefined) = ${null == undefined}`); // true
console.log();

console.log(`(null > 0) = ${null > 0}`); // false
console.log(`(null == 0) = ${null == 0}`); //false
console.log(`(null >= 0) = ${null >= 0}`); // true
console.log();

console.log(`"Undefined" should never be compared with other values`);
console.log();

// TASK 1 

console.log(`(5 > 4) = ${5 > 4}`); // true
console.log(`('apple' > 'pineapple') = ${'apple' > 'pineapple'}`); // false
console.log(`('2' > '12') = ${'2' > '12'}`); // false
console.log(`(undefined == null) = ${undefined == null}`); // true;
console.log(`(undefined === null) = ${undefined === null}`); // false
console.log(`(null == "\n0\n") = ${null == "\n0\n"}`); // false
console.log(`(null === +"\n0\n") = ${null === +"\n0\n"}`);
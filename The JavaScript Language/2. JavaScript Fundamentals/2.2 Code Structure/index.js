
// Works, but is messy
console.log("Hello"); console.log("World");

// Cleaner and correct way (same output as above)
console.log("Hello");
console.log("World");

// Due to line-breaks, the semi-colons can be omitted
// This is reffered to as an "Automatic Semi-colon Insertion"
console.log("Hello")
console.log("World");

/* This, however, does not apply to the following code
    This is because the engine knows that it is an incomplete expression */
console.log(3 +
    1
    + 2);

// This is an example of semi-colons not automatically being applied

alert("This is fine");
[1, 2].forEach(alert);

alert("There will be an error")
[1, 2].forEach(alert)


/* This
is
how you write
a multi-line
comment 

console.log("Oh no!!! I'm commented out... Bugger!");

*/

console.log("I'm not commented :)");
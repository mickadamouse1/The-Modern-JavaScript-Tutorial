// 1 ------------------------------------------
console.log("1. ------------------------------------------");

let x = 10;
let i = 0;

while (i < x) {
    console.log(i);
    i++;
    if (i == x) console.log(i);
}

console.log();


// 2 ------------------------------------------
console.log("2. ------------------------------------------");

while (i) {
    console.log(i);
    i--;
    if (i == 0) console.log(i);
}

console.log();


// 3 ------------------------------------------
console.log("3. ------------------------------------------");

do {
    console.log(i);
    i++;
    if (i == x) console.log(i);
} while (i < x);

console.log();


// 4 ------------------------------------------
console.log("4. ------------------------------------------");

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log();

// 5 ------------------------------------------
console.log("5. ------------------------------------------");

i = 0

for (i = 0; i <= 3; i++) {
    console.log(i);
}

console.log();

// 6 ------------------------------------------
console.log("6. ------------------------------------------");

i = 0

for (; i <= 3; i++) console.log(i)

console.log();

// 7 ------------------------------------------
console.log("7. ------------------------------------------");

i = 0

for (; i <= 3; i++) {
    if (i == 2) break;
    console.log(i);
}

console.log();

// 8 ------------------------------------------
console.log("8. ------------------------------------------");

i = 0

for (; i <= 3; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}

console.log();


// 9 ------------------------------------------
console.log("9. ------------------------------------------");

outer: 
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j < i*2; j++) {
        console.log(j);
        if (j == 3) break outer;
    }
}

console.log();
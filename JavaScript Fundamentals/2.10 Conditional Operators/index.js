let year = "2020";

if (year == 2020) {
    console.log(`The Year is ${2020}`);
    console.log("Ham and Cheese");
} 

if (10 < 11) console.log("10 is less than 11");

let condition = (year > 1997);

if (condition) {
    console.log("the year (2020) is greater than 1997");
}

if (!condition) {
    console.log("the year is not greater than 1997");
} else {
    console.log("Already told you");
}

if (!condition) {
    console.log("Year is really big");
} else if (year < 2030) {
    console.log("The year is less than 2030");
} else {
    console.log("Dunno");
}

console.log(); // console readability whitespace

const jim = {
    age: 18,
    name: 'Jim',
    gender: 'Male',
    hasHands: true,
    accessAllowed: undefined
}

const ela = {
    age: 13,
    name: 'Ela',
    gender: 'Female',
    hasHands: false,
    accessAllowed: undefined
}

setAccessPermission = obj => {
    for (let i = 0; i < obj.length; i++) {

        obj[i].accessAllowed = obj[i].age >= 18;

        if (obj[i].accessAllowed) {
            console.log(`${obj[i].name} is allowed access.`);
        } else {
            console.log(`${obj[i].name} is not allowed access.`);
        }

        obj[i].instrument = (obj[i].hasHands) ? 'Guitar' : 'Bongos';

        console.log(`${obj[i].name}'s choice of instrument: ${obj[i].instrument.toLowerCase()}.`);

        obj[i].introduction = (obj[i].age < 7) ? 'Hi...' : 
        (obj[i].age < 14 && obj[i].age > 7) ? `Hey, I'm ${obj[i].name}` :
        (obj[i].age >= 14 && obj[i].age < 99) ? 'Sup, bisch' : 'Errrhm! grrsm...';

        console.log(obj[i].introduction);

        (obj[i].gender == "Male") ? obj[i].temper = "Unpredictable" : obj[i].temper = "Calm";

        console.log(`${obj[i].name}'s temper is rather ${obj[i].temper.toLowerCase()}.`);
        console.log(); // console readability whitespace
    }
}

let people = [jim, ela];
setAccessPermission(people);


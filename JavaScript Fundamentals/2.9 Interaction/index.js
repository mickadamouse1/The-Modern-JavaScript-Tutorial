let message = "Hey!"
alert(message);

let result = prompt("What's your name?");
alert(`Nice to meet you, ${result}!`);

let question = "Do you like almonds?";
let question1 = confirm(question);

if (question1) {
    alert("I like almonds too!");
} else {
    alert("How don't you like almonds...?");
}
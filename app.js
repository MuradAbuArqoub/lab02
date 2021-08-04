alert("hello hello and welcome")
var name = prompt("what name do you go by?")


alert(name + " huh, never heard of it")
alert("anyway " + name + " lets play a guessing game shall we?")

alert("yes or no responses will only be accepted")
let points = 0;


let q1 = prompt("Do you think my name starts with A").toLowerCase();
if (q1 == "yes") {
    alert("Nope");
    console.log("False");

} else if (q1 == "no") {
    alert("ayyy");
    console.log("True");
    points++;
}

let q2 = prompt("Am i a cat person in ur opinion :3?").toLowerCase();
if (q2 == "yes") {
    alert("hehe");
    console.log("True");
    points++;
} else if (q2 == "no") {
    alert("noh");
    console.log("False");
}

let q3 = prompt("Do you think am older than 21?").toLowerCase();
if (q3 == "yes") {
    alert("yup");
    console.log("True");
    points++;
} else if (q3 == "no") {
    alert("nope");
    console.log("False");
}

let q4 = prompt("Do you think i would pick coffee over tea?").toLowerCase();
if (q4 == "yes") {
    alert("naaaah");
    console.log("false");
    points++;
} else if (q4 == "no") {
    alert("hell ya boi");
    console.log("yes");
}

let q5 = prompt("Do you think am taler than 185 cm?").toLowerCase();
if (q5 == "yes") {
    alert("yes i am a tall boi");
    console.log("yos");
    points++;
} else if (q5 == "no") {
    alert("guess again tall gang skrt skrt");
    console.log("nope");
}



alert("Now here is another type of guessing game")

alert("try to guess the right number you got 4 shots")
let userNumber = 10;
let counter = 0;
let numberOfTries = 4;
let randomNumber = Math.floor(Math.random(10) * userNumber + 1);

for (let attempt = 0; attempt < numberOfTries; attempt++) {
    let answer = Number(prompt("guess the random number that comes between 1-10"));
    if (answer > randomNumber) {
        alert("too high try a smaller number")
    }
    else if (answer < randomNumber) {
        alert("Too low, guess again!")
    }

    if (answer == randomNumber) {
        console.log("mmm yes")
        alert("well done")
        alert("the random number was " + randomNumber)
        alert("welp good job " + name)
        points++;
        break;
    }
    if (attempt == 3) {
        console.log("mmm no")
        alert("sad")
        alert("tough luck " + name)
        break;
    }
}

// 1- all good
// 2- iv had some questions but i found everything on internet
// 3- it toke me some time by some time i mean a whole day because am still not used to JS or HTML

alert("now here is another guessing game")
let favFood = ['sushi', 'pizza', 'smoked stake'];
let q7;
let correct = false;

for (let i = 1; i <= 6; i++) {
    q7 = prompt("guess at least on of my favorit dishes\nshawerma, burger, pizza, dawali, sushi, smoked stake, salad, bbq, fired chicken, falafil");
    
    for(let j = 0; j < favFood.length; j++){

        if (q7 === favFood[j]) {
            console.log("good job");
            alert("well done my favorit dishes are " + favFood)
            correct = true;
            points++;
            break;
        }
    }
        if(correct){
            break;
        }
    
    }
    alert(name + ", your total score is " + points);
// 1- all good
// 2- iv had some questions but i found everything on internet
// 3- it toke me some time by some time i mean a whole day because am still not used to JS or HTML
    






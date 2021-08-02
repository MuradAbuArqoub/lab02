alert("try to guess the right number you got 5 shots")
let userNumber = 10;
let counter = 0;
let numberOfTries = 5;
let randomNumber = Math.floor(Math.random(10) * userNumber + 1);



    for(let attempt = 0; attempt < numberOfTries; attempt ++){
        let answer = Number(prompt("guess the random number that comes between 1-10"));
        
        if(answer == randomNumber){
            console.log("mmm yes")
            alert("well done")
            alert("the random number was " + randomNumber)
            break;
        }
        if(attempt == 4 ){
            console.log("mmm no")
            alert("sad")
            break;
        }
    }
  


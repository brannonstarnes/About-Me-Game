"use strict";

//Welcome the User and get their name
let userName = prompt("Hello, and welcome to my Game! What is your name?");

//*************************QUIZ ABOUT ME GAME********************************

// //Ask the first yes/no question while using their name
let born = prompt(
  "Ok, " + userName + ", do you think Brannon was born in California? Yes/No?",
  ""
);

//Allow user to answer yes/no OR y/n. Take input and make lowercase

//Question 1
if (born.toLowerCase() == "yes" || born.toLowerCase() == "y") {
  alert("Ooh, sorry, " + userName + ", that is incorrect.");
} else if (born.toLowerCase() == "no" || born.toLowerCase() == "n") {
  alert("Ding Ding Ding! Way to go, " + userName + "!");
} else {
  alert("Please answer yes or no only.");
}

//Question 2
let school = prompt(
  "Next question: Did Brannon graduate from Harvard Law? Yes/No?",
  ""
);
//Allow yes/no or y/n as above
if (school.toLowerCase() == "yes" || school.toLowerCase() == "y") {
  alert("Ooh, sorry, " + userName + ", that is incorrect.");
} else if (school.toLowerCase() == "no" || school.toLowerCase() == "n") {
  alert("Well that was an easy one, right, " + userName + "?");
} else {
  alert("Please answer yes or no only.");
  // return;
}

//Question 3
let grewUp = prompt("Third question: Did Brannon grow up in Tennessee? Yes/No");

if (grewUp.toLowerCase() == "yes" || grewUp.toLowerCase() == "y") {
  //console.log('That's correct!')
  alert("Well done, " + userName + "! That is correct.");
} else if (grewUp.toLowerCase() == "no" || grewUp.toLowerCase() == "n") {
  //console.log('That's incorrect!')
  alert("Swing and a miss! Sorry, " + userName + "!");
} else {
  alert("Please answer yes or no only.");
  // return;
}

//Question 4
let nurseQ = prompt(
  "Question 4: Did Brannon once aspire to be a nurse? Yes/No"
);

if (nurseQ.toLowerCase() == "yes" || nurseQ.toLowerCase() == "y") {
  alert("Niiiice, " + userName + ", that is correct!");
} else if (nurseQ.toLowerCase() == "no" || nurseQ.toLowerCase() == "n") {
  alert("Oooh, sorry, " + userName + "!");
} else {
  alert("Please answer yes or no only.");
  // return;
}

//Question 5
let goal = prompt(
  "Last question: Does Brannon want to master the Terminal? Yes/No"
);

if (goal.toLowerCase() == "yes" || goal.toLowerCase() == "y") {
  alert("Nice work, " + userName + "! You nailed it!");
} else if (goal.toLowerCase() == "no" || goal.toLowerCase() == "n") {
  alert("WROOOONG! Sorry, " + userName + ", sometimes I get carried away. :/");
} else {
  alert("Please answer yes or no only.");
  // return;
}

//************************NUMBER GUESSING GAME*************************************

//Prompt User to guess the value of goalNumber
let numberGuess = prompt(
  "Ok, " +
    userName +
    " let's try something new. I'll give you 4 attempts to guess the number I'm thinking between 1 and 20. Go ahead. "
);

//let guessCount = 0;

//DECLARE FUNCTION for the number guessing game
function numberGame() {
  //Generate a random number 1-20 called goalNumber CREDIT: https://www.w3schools.com/js/js_random.asp
  let goalNumber = 11; //Math.random() * 20);
  console.log(goalNumber);
  //console.log("Made it here");

  for (var guessCount = 1; guessCount < 5; guessCount++) {
    if (guessCount == 4) {
      alert("That was your 4th attempt. Game Over!");
      break;
    }
    if (numberGuess > goalNumber) {
      console.log("inside high", numberGuess);
      alert("Your guess is too high.");
    }
    if (numberGuess < goalNumber) {
      console.log("inside low", numberGuess);
      alert("Your guess is too low.");
    }
    if (numberGuess == goalNumber) {
      guessCount++;
      console.log("inside correct", numberGuess);

      alert(
        "Congratualtions! You got it in " + guessCount.toString() + " tries!"
      );
      break;
    }
    if (!numberGuess) {
      alert("Please enter a valid number.");
    }
    //guessCount++;
    numberGuess = prompt("That's " + guessCount + " guesses. Try again!");
    console.log("Inside try again", numberGuess);
  }
}

numberGame();
// //tryAgain();

const myStates = [
  "tennessee",
  "utah",
  "florida",
  "illinois",
  "texas",
  "georgia",
];

let guessState = prompt(
  "One more game. Can you guess one of six states I have lived in?"
);
let stateGuessCount = 1;
let correctAns = false;

function stateGuessGame() {
  // if (guessState == true){

  while (stateGuessCount > 0 && correctAns == false) {
    //  console.log("inside guesscount equal 6");
    //alert("Nice try! Game Over.");
    for (var i = 0; i < myStates.length; i++) {
      //credit https://www.geeksforgeeks.org/ways-iterating-array-javascript/

      if (guessState.toLowerCase() == myStates[i]) {
        //congrats
        console.log("inside state guess win", guessState);
        alert(
          "Congratulations, " +
            userName +
            " you got it right in " +
            stateGuessCount +
            " guesses!"
        );
        correctAns = true;
        break;
      }
    }
    if (!correctAns) {
      //go again
      console.log("inside guess again", i);
      //
    }
    guessState = prompt("That's " + stateGuessCount + " guess. Try again.");
    console.log("stateguess number", stateGuessCount);
  }
}

stateGuessGame();

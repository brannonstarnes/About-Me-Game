"use strict";

//Welcome the User
let userName = prompt("Hello, and welcome to my Game! What is your name?");
//get Random number for game later

//let goalNumber = Math.floor(Math.random() * 50);
//console.log(goalNumber);

// //Ask the first yes/no question while using their name
let born = prompt(
  "Ok, " + userName + ", do you think Brannon was born in California? Yes/No?",
  ""
);

//Allow user to answer yes/no OR y/n. Take input and make lowercase
if (born.toLowerCase() == "yes" || born.toLowerCase() == "y") {
  //console.log('That's incorrect!')
  alert("Ooh, sorry, " + userName + ", that is incorrect.");
} else if (born.toLowerCase() == "no" || born.toLowerCase() == "n") {
  //console.log('That's correct!')
  alert("Ding Ding Ding! Way to go, " + userName + "!");
} else {
  alert("Please answer yes or no only.");
}

//Ask question 2 from education section
let school = prompt(
  "Next question: Did Brannon graduate from Harvard Law? Yes/No?",
  ""
);

//Allow yes/no or y/n as above
if (school.toLowerCase() == "yes" || school.toLowerCase() == "y") {
  //console.log('That's incorrect!')
  alert("Ooh, sorry, " + userName + ", that is incorrect.");
} else if (school.toLowerCase() == "no" || school.toLowerCase() == "n") {
  //console.log('That's correct!')
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
  //console.log('That's incorrect!')
  alert("Ooh, sorry, " + userName + ", that is incorrect.");
} else if (nurseQ.toLowerCase() == "no" || nurseQ.toLowerCase() == "n") {
  //console.log('That's correct!')
  alert("Well done, " + userName + "!");
} else {
  alert("Please answer yes or no only.");
  // return;
}

//Question 5
let goal = prompt(
  "Last question: Does Brannon want to master the Terminal? Yes/No"
);

if (goal.toLowerCase() == "yes" || goal.toLowerCase() == "y") {
  //console.log('That's correct!')
  alert("Nice work, " + userName + "! You nailed it!");
} else if (goal.toLowerCase() == "no" || goal.toLowerCase() == "n") {
  //console.log('That's incorrect!')
  alert("WROOOONG! Sorry, " + userName + ", sometimes I get carried away. :/");
} else {
  alert("Please answer yes or no only.");
  // return;
}

//set up for number guessing game below

//Generate a random number 1-50 called goalNumber CREDIT: https://www.w3schools.com/js/js_random.asp

//Prompt User to guess the value of goalNumber
let numberGuess = prompt(
  "Ok, " +
    userName +
    " let's try something new. I'll give you 6 attempts to guess the number I'm thinking between 1 and 50. Go ahead. "
);

let guessCount = 0;

//Declare the function for the number guessing game
function numberGame() {
  let goalNumber = 42;
  console.log(goalNumber);
  //console.log("Made it here");

  for (var i = 0; i < 5; i++) {
    if (guessCount == 6) {
      alert("That was your 6th attempt. Game Over!");
      break;
    }
    if (numberGuess > goalNumber) {
      // guessCount++; //add 1 to the guess counter
      console.log("inside high", numberGuess);
      alert("Your guess is too high.");

      // numberGame();
    }
    if (numberGuess < goalNumber) {
      // guessCount++;
      console.log("inside low", numberGuess);
      alert("Your guess is too low.");
      //prompt the user to try again
      // tryAgain();
      //set numberGuess value to the tryAgain value and reevaluate
    }
    if (numberGuess == goalNumber) {
      guessCount++;
      console.log("inside correct", numberGuess);
      //  guessCount++;
      alert(
        "Congratualtions! You got it in " + guessCount.toString() + " tries!"
      );
      break;
    }
    if (!numberGuess) {
      //add 1 to the guess counter
      //  guessCount++;
      //numberGuess = 1; //to avoid a neverending loop, give this a value
      alert("Please enter a valid number.");
      // tryAgain;
    }
    guessCount++;
    numberGuess = prompt("That's " + guessCount + " guesses. Try again!");
    console.log("Inside try again", numberGuess);
  }
}
// function tryAgain(numberGuess) {
//   // numberGuess = prompt("That's " + guessCount + " guesses. Try again!");
//   // console.log("Inside try again", numberGuess);
//   return numberGuess;
// }

numberGame();
//tryAgain();

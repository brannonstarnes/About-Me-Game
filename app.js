"use strict";

//Welcome
let userName = prompt("Hello, and welcome to my Game! What is your name?");
let correctTotal = 0;

//*************************QUIZ ABOUT ME GAME********************************

let born = prompt(
  "Ok, " + userName + ", do you think Brannon was born in California? Yes/No?",
  ""
);

//Allow user to answer yes/no OR y/n. Take input and make lowercase

//Question 1
function meQuiz() {
  if (born.toLowerCase() == "yes" || born.toLowerCase() == "y") {
    alert("Ooh, sorry, " + userName + ", that is incorrect.");
  } else if (born.toLowerCase() == "no" || born.toLowerCase() == "n") {
    alert("Ding Ding Ding! Way to go, " + userName + "!");
    correctTotal++;
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
    correctTotal++;
  } else {
    alert("Please answer yes or no only.");
  }

  //Question 3
  let grewUp = prompt(
    "Third question: Did Brannon grow up in Tennessee? Yes/No"
  );

  if (grewUp.toLowerCase() == "yes" || grewUp.toLowerCase() == "y") {
    //console.log('That's correct!')
    alert("Well done, " + userName + "! That is correct.");
    correctTotal++;
  } else if (grewUp.toLowerCase() == "no" || grewUp.toLowerCase() == "n") {
    //console.log('That's incorrect!')
    alert("Swing and a miss! Sorry, " + userName + "!");
  } else {
    alert("Please answer yes or no only.");
  }

  //Question 4
  let nurseQ = prompt(
    "Question 4: Did Brannon once aspire to be a nurse? Yes/No"
  );

  if (nurseQ.toLowerCase() == "yes" || nurseQ.toLowerCase() == "y") {
    alert("Niiiice, " + userName + ", that is correct!");
    correctTotal++;
  } else if (nurseQ.toLowerCase() == "no" || nurseQ.toLowerCase() == "n") {
    alert("Oooh, sorry, " + userName + "!");
  } else {
    alert("Please answer yes or no only.");
  }

  //Question 5
  let goal = prompt(
    "Last question: Does Brannon want to master the Terminal? Yes/No"
  );

  if (goal.toLowerCase() == "yes" || goal.toLowerCase() == "y") {
    alert("Nice work, " + userName + "! You nailed it!");
    correctTotal++;
  } else if (goal.toLowerCase() == "no" || goal.toLowerCase() == "n") {
    alert(
      "WROOOONG! Sorry, " + userName + ", sometimes I get carried away. :/"
    );
  } else {
    alert("Please answer yes or no only.");
  }
}
meQuiz();

//************************NUMBER GUESSING GAME*************************************

let numberGuess = prompt(
  "Ok, " +
    userName +
    " let's try something new. I'll give you 4 attempts to guess the number I'm thinking between 1 and 20. Go ahead. "
);

function numberGame() {
  //Generate a random number 1-20 called goalNumber CREDIT: https://www.w3schools.com/js/js_random.asp
  let goalNumber = 11; //Math.random() * 20);
  console.log(goalNumber);

  for (var guessCount = 1; guessCount < 5; guessCount++) {
    if (guessCount == 4) {
      alert("That was your 4th attempt. Game Over!");
      break;
    }
    if (numberGuess == goalNumber) {
      alert(
        "Congratualtions! You got it in " + guessCount.toString() + " tries!"
      );
      correctTotal++;
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

    if (!numberGuess) {
      alert("Please enter a valid number.");
    }
    numberGuess = prompt("That's " + guessCount + " guesses. Try again!");
  }
}

numberGame();

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
let stateGuessCount = 0;
let correctAns = false;

function stateGuessGame() {
  while (stateGuessCount < 6 && correctAns == false) {
    for (var i = 0; i < myStates.length; i++) {
      //credit https://www.geeksforgeeks.org/ways-iterating-array-javascript/

      if (guessState.toLowerCase() == myStates[i]) {
        //congrats
        stateGuessCount++;
        console.log("inside state guess win", guessState);
        alert(
          "Congratulations, " +
            userName +
            " you got it right in " +
            stateGuessCount +
            " guesses!"
        );
        correctTotal++;
        correctAns = true;
        break;
      }
    }
    {
      stateGuessCount++;
      console.log("inside guess again", i);
    }
    if (!correctAns) {
      guessState = prompt("That's " + stateGuessCount + " guess. Try again.");
      console.log("stateguess number", stateGuessCount);
    }
  }
}
stateGuessGame();
alert(
  "Thanks for playing, " +
    userName +
    "! You scored " +
    correctTotal +
    " correct answers! Way to go!"
);

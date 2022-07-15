const numbersDom = document.getElementById("numbers");
const resultDom = document.getElementById("result");
const infoDom = document.getElementById("info");

const numbersToShow = [];
let numbersInputByUser = [];
let guessedNumbers = [];
let scoreCounter = 0;
console.log(numbersInputByUser);
console.log("numbersToShow: ", numbersToShow);

setTimeout(showNumbers, 10, numbersToShow, numbersDom);
console.log("numbersToShow: ", numbersToShow);

// timer is set at 0 seconds, every second it increases by 1
let timerDom = document.getElementById("timer");
let seconds = 0;
let timer = setInterval(function () {
  seconds++;
  timerDom.innerHTML = seconds;
}, 1000);

setTimeout(hideNumbersResetsTimer, 30000);

setTimeout(userInputs, 30200);

setTimeout(showResult, 30600);


// for cycle to get 5 user inputs through prompts, if the number is included in the randomly generated array numbersToSHow, the score counter increases by 1.
function userInputs() {
  let number = 0;
  let inputsArray = [];
  for (let i = 0; i < 5; i++) {
    number = parseInt(prompt("Inserisci un numero"));
    if (numbersToShow.includes(number)) {
      inputsArray.push(number);
      scoreCounter++;
      document.getElementById("result").style.visibility = "visible";
    }
  }

  //conditions to show the appropriate result message

  if (inputsArray.length == 1) {
    resultDom.innerHTML = `Hai indovinato solo il numero ${inputsArray.join(
      ", "
    )}. Il tuo punteggio è ${counter}.`;
  } else if (inputsArray.length == 0) {
    resultDom.innerHTML = `Non hai indovinato nessun numero. Il tuo punteggio è ${counter}.`;
  } else {
    resultDom.innerHTML = `Numeri indovintati: ${inputsArray.join(
      ", "
    )}. Il tuo punteggio è ${counter}.`;
  }
}


//hide the numbers, the timer and the text. It also clears the timer interval
function hideNumbersResetsTimer() {
  numbersDom.style.display = "none";
  timerDom.style.display = "none";
  infoDom.style.display = "none";
  clearInterval(timer);
}

// makes the result visible after the prompts are input
function showResult() {
  resultDom.style.visibility = "visible";
}

// writes the randomly generated array in the html
function showNumbers(array, targetDom) {
  for (let i = 0; i < 5; i++) {
    //generate random numbers to show
    let randomNumber = uniqueRandomNumber(array, 1, 100);
    array.push(randomNumber);
    targetDom.innerHTML = array.join(", ");
  }
}

// returns a random unique number between min and max
function uniqueRandomNumber(array, min, max) {
  let validNumber = false;
  let generatedNumber;
  while (!validNumber) {
    generatedNumber = getRandomNumber(min, max);
    if (!array.includes(generatedNumber)) {
      validNumber = true;
    }
  }
  return generatedNumber;
}

// returns a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

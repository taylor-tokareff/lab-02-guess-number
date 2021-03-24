// import functions and grab DOM elements

import {guessFunction} from './guessFunction.js'

const guessInput = document.getElementById ('guess-input');
const guessButton = document.getElementById ('guess-button');

// initialize state
let guessRemaining = 3;
let userGuess = 0;
let hiddenNumber = 7;

// set event listeners to update state and DOM

// when user presses the button brings in thier guess from guess-input and compares it to the hiddenNumber. If correct returns win display, if below tells them bellow, if above tells them above. After each unsucessfull guess retuns number of remaining guesses. After 3 unsucesfull guess retunr lose display.
guessButton.addEventListener ('click',() =>{
    const inputValue = guessInput.value
    const compareNumber = guessFunction(inputValue, hiddenNumber);

})


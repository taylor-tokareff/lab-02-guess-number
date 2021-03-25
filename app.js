// import functions and grab DOM elements

import {guessFunction} from './guessFunction.js'

const guessInput = document.getElementById ('guess-input');
const guessButton = document.getElementById ('guess-button');
const displayWinLose = document.getElementById ('win-lose');
const displayHigherLower = document.getElementById ('higher-lower')
const displayRemaining = document.getElementById ('remaining')

// initialize state
let guessRemaining = 3;
let userGuess = 0;
let hiddenNumber = Math.floor(Math.random() * 20) + 1;
console.log (hiddenNumber)

// set event listeners to update state and DOM

// when user presses the button brings in thier guess from guess-input and compares it to the hiddenNumber. If correct returns win display, if below tells them bellow, if above tells them above. After each unsucessfull guess retuns number of remaining guesses. After 3 unsucesfull guess retunr lose display.
guessButton.addEventListener ('click',() =>{
    const inputValue = guessInput.value;
    const compareNumber = guessFunction(Number(inputValue), hiddenNumber);
    console.log('compare number', compareNumber)


    if (compareNumber === 0) {
        displayWinLose.textContent = 'WINNER!!!'
        guessButton.style.display = 'none'
        displayHigherLower.style.display = 'none'
        displayRemaining.style.display = 'none'

    }

    if (compareNumber === -1) {
        displayHigherLower.textContent = "Higher!"
        guessRemaining--
        displayRemaining.textContent = `${guessRemaining} out of 3 guesses remaing`
    }

    if (compareNumber === 1) {
        displayHigherLower.textContent = "Lower!"
        guessRemaining--
        displayRemaining.textContent = `${guessRemaining} out of 3 guesses remaining`
        
    }

    if (guessRemaining === 0) {
        displayWinLose.textContent = 'LOSER!!!'
        guessButton.style.display = 'none'
        displayHigherLower.style.display = 'none'
    } 


})


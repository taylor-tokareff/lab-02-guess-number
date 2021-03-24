export function guessFunction(guessInput, hiddenNumber) {
    console.log ('guessInput', guessInput)
    console.log ('hiddenNumber', hiddenNumber)
    if (guessInput === hiddenNumber) {
        return 0};

    if (guessInput < hiddenNumber) {
        return -1};

    if (guessInput > hiddenNumber) {
        return 1};

    

}
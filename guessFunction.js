export function guessFunction(guessInput, hiddenNumber) {
    if (guessInput === hiddenNumber) {
        return 0};

    if (guessInput < hiddenNumber) {
        return -1};

    if (guessInput > hiddenNumber) {
        return 1};

    

}
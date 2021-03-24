// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('if user input equals hidden number returns 0 if below hidden number returns -1 if above returns 1'), (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const hiddenNumber = guessFunction(7);
    const belowNumber = guessFunction(6);
    const aboveNumber = guessFunction(8);

    //Act 
    // Call the function you're testing and set the result to a const
    


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(hiddenNumber, 'correct number', 'guess correct');
    expect.equal(belowNumber, 'number too low', 'guess again');
    expect.equal(aboveNumber, 'number too high', 'guess again');

});

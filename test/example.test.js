// IMPORT MODULES under test here:
// import { example } from '../example.js';

import {guessFunction} from '../guessFunction.js'

const test = QUnit.test;

test('if user input equals hidden number returns 0 if below hidden number returns -1 if above returns 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const hiddenNumber = guessFunction(7,7);
    const belowNumber = guessFunction(-1,7);
    const aboveNumber = guessFunction(8,7);

    //Act 
    // Call the function you're testing and set the result to a const
    


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(hiddenNumber, 0, 'guess correct');
    expect.equal(belowNumber, -1, 'guess again');
    expect.equal(aboveNumber, 1, 'guess again');

});

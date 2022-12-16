import { assert } from 'chai';
import { drawChessBoard } from '../src/task1.js';

describe('Test suite for task 1 that includes valid inputs', function () {
  it('Should draw a 5x5 board', function () {
    const res5x5 = drawChessBoard(5, 5, '*');
    assert.equal(res5x5, '*****\n *****\n*****\n *****\n*****\n');
  });
});

describe('Test suite for task 1 that includes invalid inputs', function () {
  it('Should return an error object with the instructions to use the function', function () {
    const resInstructions = drawChessBoard();
    assert.deepEqual(resInstructions, {
      status: 'failed',
      reason:
        'Please pass as parameters the length of the board, the width of the board and also the character to display in the board',
    });
  });
  it("Should return an error object displaying that there's a parameter missing", function () {
    const resIncomplete = drawChessBoard(10, 5);
    assert.deepEqual(resIncomplete, {
      status: 'failed',
      reason:
        "There's some parameters missing. Pease check that you're passing the length of the board, the width of the board and the character to display in the board and the character to display in the board",
    });
  });
  it('Should return an error object displaying that some parameters have the incorrect format', function () {
    const resIncorrectParameters = drawChessBoard('10', 5, '*');
    assert.deepEqual(resIncorrectParameters, {
      status: 'failed',
      reason:
        'Please check the parameters, length and width must be a positive number and the character to display in the board and the character to display in the board must be a string of length 1',
    });
  });
});

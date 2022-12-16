import { assert } from 'chai';
import { nummericSequence } from '../src/task6.js';

describe('Test suite for task 6 that includes valid inputs', function () {
  it('Should return array with the numeric sequence [ 6, 7, 8, 9, 10 ]', function () {
    const resV = nummericSequence(5, 25);
    assert.deepEqual(resV, [6, 7, 8, 9, 10]);
  });
});

describe('Test suite for task 6 that includes invalid inputs', function () {
  it('Should return error object with instructions', function () {
    const resV = nummericSequence();
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        'You have the pass the ammount of numbers that you want to get as a sequence, and also need to pass a number m wich will be the minimun square of the numbers that go into the sequence',
    });
  });
  it('Should return error object saying that the number for minimum squares is missing', function () {
    const resV = nummericSequence(25);
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        'Please pass the minimum square of the numbers that go into the sequence',
    });
  });
  it('Should return error object saying that the parameters are not valid (are not numbers or < 0)', function () {
    const resV = nummericSequence(5, -25);
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        'Please check the validity of the parameters, both parameters must be numbers greater than zero',
    });
  });
});

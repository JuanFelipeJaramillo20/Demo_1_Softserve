import { assert } from 'chai';
import { palindrome } from '../src/task4.js';

describe('Test suite for task 4 that includes valid inputs', function () {
  it('Should return array with palindromes found', function () {
    const resV = palindrome(34433);
    assert.deepEqual(resV, ['44', '3443']);
  });
});

describe('Test suite for task 4 that includes invalid inputs', function () {
  it('Should return error object with instructions', function () {
    const resV = palindrome();
    assert.deepEqual(resV, {
      status: 'failed',
      reason: 'You have to pass a number as a parameter to the function',
    });
  });
  it('Should return error object with instructions to check the number passed because it is invalid', function () {
    const resV = palindrome('39443');
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        "Please check that you're passing a number as a parameter to the function",
    });
  });
});

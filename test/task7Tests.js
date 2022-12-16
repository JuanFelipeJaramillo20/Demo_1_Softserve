import { assert } from 'chai';
import { fibonacci } from '../src/task7.js';

describe('Test suite for task 7 that includes valid inputs', function () {
  it('Should return a valid fibonacci sequence that has as a min 1 and as a max 8', function () {
    const resV = fibonacci({ min: 1, max: 8 });
    assert.deepEqual(resV, [1, 1, 2, 3, 5, 8]);
  });
  it('Should return a valid fibonacci sequence with numbers of length 3', function () {
    const resV = fibonacci({ length: 3 });
    assert.deepEqual(resV, [144, 233, 377, 610, 987]);
  });
});

describe('Test suite for task 7 that includes invalid inputs', function () {
  it('Should return an error object with instructions', function () {
    const resV = fibonacci();
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        'You have to pass an object that can either have a length property, which will set the length of the numbers that will be calculated and returned, or you can pass an object with a min and max property that will act as a range for the returned numbers',
    });
  });
  it('Should return an error object telling the user to check if the parameters are valid', function () {
    const resV = fibonacci({ test: 3 });
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        'Please check the parameter, the object seems to have incorrect properties,  it must have either length or min and max properties',
    });
  });
});

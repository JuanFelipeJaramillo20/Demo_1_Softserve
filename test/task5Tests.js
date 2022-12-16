import { assert } from 'chai';
import { luckyTickets } from '../src/task5.js';

describe('Test suite for task 5 that includes valid inputs', function () {
  it('Should return object saying the easy method won', function () {
    const resV = luckyTickets({ min: 123456, max: 654321 });
    assert.equal(
      resV,
      'The winning method is easy tickets with: 31607 vs complicated tickets with: 30213'
    );
  });
  it('Should return object saying that both methods give out the same answer', function () {
    const resV = luckyTickets({ min: 100000, max: 200000 });
    assert.equal(
      resV,
      'Both methods offer the same ammount of luckyTickets: 5280'
    );
  });
});

describe('Test suite for task 5 that includes invalid inputs', function () {
  it('Should return error object with instructions', function () {
    const resV = luckyTickets();
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        'You have to pass an object that has a numeric property min and a numeric property max as a parameter to the function',
    });
  });
  it('Should return error object saying that there is a parameter missing', function () {
    const resV = luckyTickets({ max: 200000 });
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        'Please check that the context parameter has both a min and max property',
    });
  });
  it('Should return error object saying that both min and max properties must be numbers', function () {
    const resV = luckyTickets({ min: '100000', max: '200000' });
    assert.deepEqual(resV, {
      status: 'failed',
      reason:
        'Please check that both the min and max properties are numeric values',
    });
  });
});

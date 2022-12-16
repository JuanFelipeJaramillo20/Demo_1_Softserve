import { assert } from 'chai';
import { envelope } from '../src/task2.js';

describe('Test suite for task 2 that includes valid inputs', function () {
  it('Should return 0', function () {
    const res0 = envelope({ sides: [2, 3] }, { sides: [2, 3] });
    assert.equal(res0, 0);
  });
  it('Should return 1', function () {
    const res1 = envelope({ sides: [10, 10] }, { sides: [2, 3] });
    assert.equal(res1, 1);
  });
  it('Should return 2', function () {
    const res2 = envelope({ sides: [2, 3] }, { sides: [10, 10] });
    assert.equal(res2, 2);
  });
});

describe('Test suite for task 2 that includes invalid inputs', function () {
  it('Should return error object with instructions', function () {
    const resIns = envelope();
    assert.deepEqual(resIns, {
      status: 'failed',
      reason:
        'You have to pass two objects each one with the following properties: side a and side b',
    });
  });
  it('Should return error object saying that there are parameters missing', function () {
    const ressMissing = envelope({ sides: [2, 3] });
    assert.deepEqual(ressMissing, {
      status: 'failed',
      reason:
        'Please check that you passed both parameters with the correct values',
    });
  });
  it('Should return error object saying that the parameters are incorrect', function () {
    const resIncorrect = envelope({ sides: [-2, 3] }, { sides: [10, 10] });
    assert.deepEqual(resIncorrect, {
      status: 'failed',
      reason:
        'Please check that you passed both parameters with the correct values, Both parameters must be objects with the property sides and this property must contains two positive numbers',
    });
  });
});

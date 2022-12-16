import { assert } from 'chai';
import { sortingTriangles } from '../src/task3.js';

describe('Test suite for task 3 that includes valid inputs', function () {
  it('Should return sorted triangles', function () {
    const resV = sortingTriangles([
      { vertices: 'ABC', a: 10, b: 20, c: 22.36 },
      { vertices: 'TED', t: 3, e: 4, d: 5 },
    ]);
    assert.deepEqual(resV, [
      { vertices: 'ABC', a: 10, b: 20, c: 22.36 },
      { vertices: 'TED', t: 3, e: 4, d: 5 },
    ]);
  });
});

describe('Test suite for task 3 that includes invalid inputs', function () {
  it('Should return error object with instructions', function () {
    const resInstructions = sortingTriangles();
    assert.deepEqual(resInstructions, {
      status: 'failed',
      reason:
        'You have to pass an array of triangles with the following properties: height and base',
    });
  });
  it('Should return error object saying that the parameter is non an array', function () {
    const resInstructions = sortingTriangles('aaa');
    assert.deepEqual(resInstructions, {
      status: 'failed',
      reason:
        'Please check the parameter sent, it must be an array of triangles with the following properties: height and base',
    });
  });
  it('Should return error object instructing the user to check if the triangles inside the array passed as parameter have valid properties and values', function () {
    const resInstructions = sortingTriangles([
      { vertices: 'ABC', a: -5, b: 20, c: 22.36 },
      { vertices: 'TED', t: 3, e: 4, d: 5 },
    ]);
    assert.deepEqual(resInstructions, {
      status: 'failed',
      reason:
        'Please check the parameter sent, it must be an array of triangles with the following properties: height and base',
    });
  });
});

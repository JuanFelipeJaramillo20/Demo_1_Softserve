import { drawChessBoard } from './src/task1.js';
import { envelope } from './src/task2.js';
import { sortingTriangles } from './src/task3.js';
import { palindrome } from './src/task4.js';
import { luckyTickets } from './src/task5.js';
import { nummericSequence } from './src/task6.js';
import { fibonacci } from './src/task7.js';

function executeTask1() {
  console.log('**********Executing Task 1**********');
  console.log(drawChessBoard());
  console.log(drawChessBoard(5, 5, '*'));
  console.log(drawChessBoard(5, -5, '*'));
  console.log('**********Finished Executing Task 1**********');
}

function executeTask2() {
  console.log('**********Executing Task 2**********');
  console.log(envelope());
  console.log(envelope({ sides: [1, 2] }));
  console.log(envelope({ sides: [2, 3] }, { sides: [1, 0] }));
  console.log(envelope({ sides: [2, 3] }, 5));
  console.log(envelope({ sides: [2, 3] }, { sides: [5, 8] }));
  console.log(envelope({ sides: [2, 3] }, { sides: [2, 3] }));
  console.log('**********Finished Executing Task 2**********');
}

function executeTask3() {
  console.log('**********Executing Task 3**********');
  let sortTrianglesTest = [
    { vertices: 'ABC', a: 10, b: 20, c: 22.36 },
    { vertices: 'TED', t: 3, e: 4, d: 5 },
  ];

  let badTest = [
    { vertices: 'ABC', a: 10, b: 20, c: 22.36 },
    { vertices: 5, t: 3, e: 4, d: 5 },
  ];

  let badTest1 = [
    { vertices: 'ABC', a: -5, b: 20, c: 22.36 },
    { vertices: 'TED', t: 3, e: 4, d: 5 },
  ];
  console.log(sortingTriangles());
  console.log(sortingTriangles(badTest));
  console.log(sortingTriangles(badTest1));
  console.log(sortingTriangles(sortTrianglesTest));
  console.log('**********Finished Executing Task 3**********');
}

function executeTask4() {
  console.log('**********Executing Task 4**********');
  console.log(palindrome(34433));
  console.log(palindrome());
  console.log(palindrome('34433'));
  console.log('**********Finished Executing Task 4**********');
}

function executeTask5() {
  console.log('**********Executing Task 5**********');
  console.log(luckyTickets({ min: 123456, max: 654321 }));
  console.log(luckyTickets({ min: 100000, max: 200000 }));
  console.log(luckyTickets());
  console.log(luckyTickets({ test: 2 }));
  console.log(luckyTickets({ min: '123', max: '123' }));
  console.log('**********Finished Executing Task 5**********');
}

function executeTask6() {
  console.log('**********Executing Task 6**********');
  console.log(nummericSequence(5, 25));
  console.log(nummericSequence());
  console.log(nummericSequence(5));
  console.log(nummericSequence(-5, 8));
  console.log('**********Finished Executing Task 6**********');
}

function executeTask7() {
  console.log('**********Executing Task 7**********');
  console.log(fibonacci());
  console.log(fibonacci({ test: 3 }));
  console.log(fibonacci({ min: 1, max: 8 }));
  console.log(fibonacci({ length: 3 }));
  console.log('**********Finished Executing Task 7**********');
}

executeTask1();
executeTask2();
executeTask3();
executeTask4();
executeTask5();
executeTask6();
executeTask7();

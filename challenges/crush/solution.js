// https://www.hackerrank.com/challenges/crush/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getArrayOfLength(length, initialValue) {
  const arr = []
  while (length--) {
    arr.push(initialValue)
  }
  return arr
}

function applyOperation(arr, operation) {
  const min = operation[0] - 1
  const max = operation[1] - 1
  const additive = operation[2]

  return arr.map((value, i) => (i >= min && i <= max)
    ? additive + value
    : value)
}

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  return Math.max.apply(this,
    queries.reduce((accumulator, query) => applyOperation(accumulator, query), getArrayOfLength(n, 0))
  )
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}

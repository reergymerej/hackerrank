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

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positives = 0
  let negatives = 0
  let zeroes = 0
  arr.forEach(x => {
    if (x === 0) {
      zeroes++
    } else if (x < 0) {
      negatives++
    } else {
      positives++
    }
  })

  return [
    positives / arr.length,
    negatives / arr.length,
    zeroes / arr.length,
  ]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = plusMinus(arr).join('\n');
    ws.write(result + '\n');
}


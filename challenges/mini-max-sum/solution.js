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

const sumArray = (arr) => arr.reduce((accumulator, value) => accumulator + value, 0)

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b)
  const lowest = arr.slice(0, 4)
  const highest = arr.slice(1)
  return sumArray(lowest) + ' ' + sumArray(highest)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = miniMaxSum(arr);

    ws.write(result + '\n');

    ws.end();
}

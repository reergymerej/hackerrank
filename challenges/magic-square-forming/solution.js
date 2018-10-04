'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

let solution = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2],
]

const rotate = (arr) => [
  [ arr[2][0], arr[1][0], arr[0][0] ],
  [ arr[2][1], arr[1][1], arr[0][1] ],
  [ arr[2][2], arr[1][2], arr[0][2] ],
]

const flip = (arr) => [
  [ arr[0][2], arr[0][1], arr[0][0] ],
  [ arr[1][2], arr[1][1], arr[1][0] ],
  [ arr[2][2], arr[2][1], arr[2][0] ],
]

const allSolutions = []

for (let i = 0; i < 4; i++) {
  solution = rotate(solution)
  allSolutions.push(solution)
  solution = flip(solution)
  allSolutions.push(solution)
}

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
  let totalCost = 0
  console.log(solution)

  console.log(allSolutions)

  return totalCost
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}


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

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
  let totalCost = 0

  // Always put 5 in the middle.
  const center = s[1][1]
  totalCost += Math.abs(center - 5)

  const pairs = [
    [s[0][0], s[2][2]],
    [s[0][1], s[2][1]],
    [s[0][2], s[2][0]],
    [s[1][0], s[1][2]],
  ]

  const isValidPair = (a, b) => {
    return !([a, b].includes(5))
      && a + b === 10
  }

  pairs.forEach(pair => {
    const a = pair[0]
    const b = pair[1]
    const valid = isValidPair(a, b)
    if (!valid) {
      const sum = a + b
      const costToFix = Math.abs(sum - 10)
      // console.log(pair, sum, costToFix)
      totalCost += costToFix
    }
  })

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


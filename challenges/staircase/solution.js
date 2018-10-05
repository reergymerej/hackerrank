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

const repeat = (x, count) => {
  let result = ''
  while (result.length < count) {
    result += x
  }
  return result
}

// Complete the staircase function below.
function staircase(n) {
  let result = ''
  for (let row = 0; row < n; row++) {
    const spaces = n - row - 1
    const hashes = n - spaces
    const s = repeat(' ', spaces)
    const h = repeat('#', hashes)
    result += (s + h + '\n')
  }

  return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);

    const result = staircase(n);
  console.log(result)
    ws.write(result + "\n");

    ws.end();
}

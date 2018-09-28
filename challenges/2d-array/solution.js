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

function getHourGlassRow(row, length, offset) {
  const trimmedRow = []
  for (let i = 0; i < length; i++) {
    trimmedRow.push(row[offset + i])
  }
  return trimmedRow
}

function getHourGlasses(arr) {
  let row = 0
  const hgWidth = 3
  const hgHeight = 3
  const center = Math.floor(hgWidth / 2)

  const hourGlasses = []

  while (row <= arr.length - hgHeight) {
    const topRow = arr[row]
    const bottomRow = arr[row + hgHeight - 1]
    let col = 0

    while (col <= topRow.length - hgWidth) {
      const top = getHourGlassRow(topRow, hgWidth, col)
      const bottom = getHourGlassRow(bottomRow, hgWidth, col)
      const middle = [ arr[row + 1][col + center] ]

      hourGlasses.push([ top, middle, bottom ])
      col++
    }

    row++
  }

  return hourGlasses
}

function sumArray (arr) {
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0)
}

// Complete the hourglassSum function below.
// return an integer, the maximum hourglass sum in the array
function hourglassSum(arr) {
  // find each hour glass
  const hourGlasses = getHourGlasses(arr)
  let maxSum = 0

  // sum each
  hourGlasses.forEach(function (hourGlass) {
    const sum = hourGlass.reduce(function (accumulator, currentValue) {
      return accumulator + sumArray(currentValue)
    }, 0)
    maxSum = Math.max(sum, maxSum)
  })

  // return max sum
  return maxSum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}

// https://www.hackerrank.com/challenges/new-year-chaos/problem

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

function moveInArr(arr, value, toIndex) {
  const fromIndex = arr.indexOf(value)
  arr.splice(fromIndex, 1)
  arr.splice(toIndex, 0, value)
  return arr
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
  // Print an integer denoting the minimum number of bribes needed to get the
  // queue into its final state. Print Too chaotic if the state is invalid, i.e.
  // it requires a person to have bribed more than  people.

  // for each person, state how for they are from their origin
  console.log('\n', q)
  let bribeCount = 0
  let chaos = false

  let arr = []
  while (arr.length < q.length) {
    arr.push(arr.length + 1)
  }

  q.forEach((person, currentIndex) => {
    if (!chaos) {
      const variance = currentIndex - (person - 1)
      const bribesGiven = variance < 0 ? -variance : 0
      if (bribesGiven) {

        console.log(person, 'gave bribe')

        if (bribesGiven > 2) {
          chaos = true
          return
        }

        // move in original array
        arr = moveInArr(arr, person, currentIndex)
        console.log('arr', arr)

        bribeCount += bribesGiven
      }
    }
    /*
    if (!chaos) {
      const originalIndex = person - 1
      const moved = originalIndex - currentIndex

      console.log(`${person} moved`, moved)

      if (moved > 0) {
        bribeCount += moved
        if (moved > 2) {
          chaos = true
        }
      }
    }
    */
  })

  const result = chaos
    ? 'Too chaotic'
    : bribeCount

  console.log('result', result)




  /*
 [ 1, 2, 3, 4, 5, 6, 7, 8 ]

 [ 1, 2, 3, 5, 4, 6, 7, 8 ] 5
 [ 1, 2, 5, 3, 4, 6, 7, 8 ] 5
 [ 1, 2, 5, 3, 4, 7, 6, 8 ] 7

 [ 1, 2, 5, 3, 7, 4, 6, 8 ] 7
 [ 1, 2, 5, 3, 7, 4, 8, 6 ] 8
 [ 1, 2, 5, 3, 7, 8, 4, 6 ] 8

 [ 1, 2, 5, 3, 7, 8, 6, 4 ] 6


 1 - Find person out of place.
 2 - In the original array, move the person and count moves.
 3 - Find the next that is higher than the one we just moved that is out of place.
 */

  // find the first one that has been moved forward
  // 5







  return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        const result = minimumBribes(q);

      ws.write(result + '\n');

    }
  ws.end();
}

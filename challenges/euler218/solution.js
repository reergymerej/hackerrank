const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

const memoize = (fn, ignoreOrder) => {
  const cache = {}
  const memoizedFn = function (){
    const args = Array.prototype.slice.apply(arguments)
    const key = (ignoreOrder
      ? args.sort()
      : args).join()

    const cached = cache[key]
    if (cached) {
      return cached
    }

    return cache[key] = fn.apply(this, args)
  }
  memoizedFn.cache = cache
  return memoizedFn
}

const isPerfectSquare = memoize((x) => Number.isInteger(Math.sqrt(x)))

const isDivisibleBy = memoize((x, y) => x % y === 0)

const notSuperPerfect = memoize((triangle) => {
  // its area is a multiple of the perfect numbers 8 and 28
  const area = triangle[0] * triangle[1] / 2
  return !isDivisibleBy(area, 6) || !isDivisibleBy(area, 28)
})

const getBInt = memoize((a, cSquared) => {
  const aSquared = a * a
  const b = Math.sqrt(cSquared - aSquared)
  if (Number.isInteger(b)) {
    return b
  }
})

const gcd = memoize((a, b) => {
  const max = Math.min(a, b)
  let commonDenominator = 1
  for (let i = 1; i <= max; i++) {
    const aVal = a / i
    const bVal = b / i
    if (Number.isInteger(aVal) && Number.isInteger(bVal)) {
      commonDenominator = i
    }
  }

  return commonDenominator
}, true)

const isPrimitiveTriangle = memoize((sides) => {
  const a = sides[0]
  const b = sides[1]
  const c = sides[2]
  const gcdAB = gcd(a, b)
  if (gcdAB === 1) {
    const gcdBC = gcd(b, c)
    return gcdBC === 1
  }
  return false
})

const getPrimitiveTriangles = memoize((c) => {
  const cSquared = c * c
  const triangles = []
  let stop = c
  for (let a = 1; a < stop; a++) {
    const b = getBInt(a, cSquared)
    if (b) {
      triangles.push([a, b, c])
      stop = b
    }
  }

  return triangles.filter(isPrimitiveTriangle)
})

// How many perfect right-angled triangles with c <= n exist that are not super-perfect?
const solve = (n) => {
  let count = 0

  for (let hypotenuse = n; hypotenuse <= n; hypotenuse++) {
    if (isPerfectSquare(hypotenuse)) {
      const perfectTriangles = getPrimitiveTriangles(hypotenuse)
      const notSuper = perfectTriangles.filter(notSuperPerfect)
      count = notSuper.length
    }
  }
  return count
}

function processData(input) {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const values = input.split('\n')
  const queries = parseInt(values[0], 10)

  for (let i = 0; i < queries; i++) {
    const value = parseInt(values[i + 1], 10)
    const result = solve(value)
    ws.write(result + '\n');
  }

  ws.end();
}

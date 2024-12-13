// stpe 1: can you call one function inside onother function

// This is the basic example of the
/*
function square(num) {
  return num * num;
}
function cube(num) {
  return num * num * num;
}
function sumOfSquares(a, b) {
  const sum1 = square(a);
  const sum2 = square(b);
  return sum1 + sum2;
}

function sumOfCubes(a, b) {
  const cube1 = cube(a);
  const cube2 = cube(b);
  return cube1 + cube2;
}

console.log("Sum of squares is", sumOfSquares(2, 3));
console.log("Sum of cubes is", sumOfCubes(2, 3));
*/

// NOW THE CALLBACK WAY OF DOING THINGS

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function sumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

console.log("sum of squares is", sumOfSomething(2, 3, square));
console.log("sum of cubes is", sumOfSomething(2, 3, cube));

// ANONYMOUS FUNCTION
// --- instead of creating a small one line functions and then calling them by the name you can create a anonymous function like below. this function dosent have a name and we can directly pass the logic of the function in the argument.

console.log(
  "sum of squares by anonymous fn is",
  sumOfSomething(2, 3, (n) => {
    return n * n;
  })
);

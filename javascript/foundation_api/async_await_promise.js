// SYNCRONOUS (sync) - together, one after the other, sequencial, only one thing at a time.
// ASYNCRONOUS (async) - opposite of syncronous, happens in parts, multiple things are context switching with each other.
/*
function findSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("Hello World");
*/

// *******************************************************************************************
// file system
// const fs = require("fs");
// fs.readFile("text.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("hi anu");

// EXAMPLE
/*
console.log("hi there");

setTimeout(()=> {
    console.log('10 sec');
}, 10000);


setTimeout(()=> {
    console.log('5 sec');
}, 5);

let a = 0;
for(let i=0; i<5; i++){
    a += i;  
}
console.log(a);
*/

// Promises are nothing but a syntactic sugur on top of the callbacks and asyncronous functions.
// below is not a good way to do the things

// Ugly Way ****
// my own asyncronous function
const fs = require("fs");
function readTextFile(cb) {
  fs.readFile("text.txt", "utf-8", (err, data) => {
    console.log(cb(data));
  });
}
// callback function to call
function onDone(data) {
  console.log(data);
}

// readTextFile(onDone);

// Cleaner Way ***
// My own asyncronous function

function ReadTextFile() {
  return new Promise((resolve) => {
    fs.readFile("text.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
}
function onDone(data) {
  console.log(data);
}
// ReadTextFile().then(onDone);

// ASYNC AWAIT SYNTAX
function anuragsAsyncFuntion() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi There");
    }, 3000);
  });
}

async function main() {
  // no callbacks, no .then() suntax
  let value = await anuragsAsyncFuntion();
  console.log("hi there 1");
  console.log(value);
}

main();
console.log("after main");

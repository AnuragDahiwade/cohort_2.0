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
const fs = require("fs");
fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("hi anu");

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

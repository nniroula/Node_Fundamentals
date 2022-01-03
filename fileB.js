const importFile = require('./fileA');

// call functions in fileA
let a = importFile.addFunc(2, 3);
console.log(a);
// Go to terminal and run node and run this file

let s = importFile.sub(4, 4);
console.log(s);
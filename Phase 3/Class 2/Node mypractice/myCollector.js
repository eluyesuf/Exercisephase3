const x = require("./myfirst");
const y= require("./mysecond");
const fs = require("fs");
console.log(x.myMultiplier(5));
console.log(y.myMultiplier(5));

// // 3rd question
fs.writeFileSync("results.txt", "The value of 14 when passed through the myMultiplier function is" + x.myMultiplier(14), 'utf8');
// console.log(fs)


fs.appendFileSync("results.txt", "\n The value of 14 when passed through the myMultiplier function is" + y.myMultiplier(14), 'utf8');
// console.log(fs);



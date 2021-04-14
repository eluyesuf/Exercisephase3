// 1st questions
// *********************
console.log("My first module");
// *****************

function myMultiplier(m) {
   return 2 * m;  
}
console.log(myMultiplier(5));

// *****************
// export
module.exports.myMultiplier = myMultiplier;
console.log(module);




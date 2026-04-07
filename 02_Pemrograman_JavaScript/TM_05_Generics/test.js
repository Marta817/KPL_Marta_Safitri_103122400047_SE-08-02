const { fizzBuzz, zzzzOrNum } = require("./index");

console.log("Test zzzzOrNum:");
console.log(zzzzOrNum(3));
console.log(zzzzOrNum(5));
console.log(zzzzOrNum(15));
console.log(zzzzOrNum(7));

console.log("\nTest fizzBuzz:");
console.log(fizzBuzz([1,2,3,4,5,6,15]));